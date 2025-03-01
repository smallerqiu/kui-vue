const $placeholder = Symbol();
const $fakeParent = Symbol();
const $nextSiblingPatched = Symbol();
const $childNodesPatched = Symbol();

const isFrag = node => 'frag' in node;

const parentNodeDescriptor = {
	get() {
		return this[$fakeParent] || this.parentElement;
	},
	configurable: true,
};

const patchParentNode = (
	node,
	fakeParent,
) => {
	if ($fakeParent in node) {
		return;
	}

	node[$fakeParent] = fakeParent;

	Object.defineProperty(node, 'parentNode', parentNodeDescriptor);
};

const nextSiblingDescriptor = {
	get() {
		const { childNodes } = this.parentNode;
		const index = childNodes.indexOf(this);
		if (index > -1) {
			return childNodes[index + 1] || null;
		}

		return null;
	},
};

const patchNextSibling = (node) => {
	if ($nextSiblingPatched in node) {
		return;
	}

	node[$nextSiblingPatched] = true;

	Object.defineProperty(
		node,
		'nextSibling',
		nextSiblingDescriptor,
	);
};

const getTopFragment = (node, fromParent) => {
	while (node.parentNode !== fromParent) {
		const { parentNode } = node;
		if (parentNode) {
			node = parentNode;
		}
	}

	return node;
};

let getChildNodes;

// For a parent to get fake children
const getChildNodesWithFragments = (node) => {
	// In case SSR
	if (!getChildNodes) {
		const childNodesDescriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'childNodes');
		getChildNodes = childNodesDescriptor.get;
	}

	const realChildNodes = getChildNodes.apply(node);
	const childNodes = Array.from(realChildNodes).map(
		childNode => getTopFragment(childNode, node),
	);

	// De-dupe child nodes that point to the same fragment
	return childNodes.filter(
		(childNode, index) => childNode !== childNodes[index - 1],
	);
};

const childNodesDescriptor = {
	get() {
		return this.frag || getChildNodesWithFragments(this);
	},
};

const firstChildDescriptor = {
	get() {
		return this.childNodes[0] || null;
	},
};

function hasChildNodes() {
	return this.childNodes.length > 0;
}

const patchChildNodes = (node) => {
	if ($childNodesPatched in node) {
		return;
	}

	node[$childNodesPatched] = true;

	Object.defineProperties(node, {
		childNodes: childNodesDescriptor,
		firstChild: firstChildDescriptor,
	});

	node.hasChildNodes = hasChildNodes;
};

/**
 * Methods overwritten for vue-frag to use internally
 */

// This works recursively. If child is also a frag, it automatically goes another level down
function before(...nodes) {
	this.frag[0].before(...nodes);
}

function remove() {
	// If the fragment is being removed, all children, including placeholder should be removed
	const { frag } = this;
	const removed = frag.splice(0, frag.length);
	removed.forEach((node) => {
		node.remove();
	});
}

// FlatMap polyfill
const getFragmentLeafNodes = children => Array.prototype.concat(
	...children.map(childNode => (
		isFrag(childNode)
			? getFragmentLeafNodes(childNode.frag)
			: childNode
	)),
);

const addPlaceholder = (
	node,
	insertBeforeNode,
) => {
	const placeholder = node[$placeholder];

	insertBeforeNode.before(placeholder);
	patchParentNode(placeholder, node);
	node.frag.unshift(placeholder);
};

function removeChild(node) {
	if (isFrag(this)) {
		// If this is a fragment element
		const hasChildInFragment = this.frag.indexOf(node);
		if (hasChildInFragment > -1) {
			const [removedNode] = this.frag.splice(hasChildInFragment, 1);

			// If last node, insert placeholder
			if (this.frag.length === 0) {
				addPlaceholder(this, removedNode);
			}

			node.remove();
		}
	} else {
		// For frag parent
		const children = getChildNodesWithFragments(this);
		const hasChild = children.indexOf(node);

		if (hasChild > -1) {
			node.remove();
		}
	}

	return node;
}

function insertBefore(
	insertNode,
	insertBeforeNode,
) {
	// Should this be leaf nodes?
	const insertNodes = insertNode.frag || [insertNode];

	// If this element is a fragment, insert nodes in virtual fragment
	if (isFrag(this)) {
		/**
		 * In this case, it's impossible for insertNode.frag to be defined
		 * aka insertNode is always a single node
		 */
		if (
			// Parent already patched
			insertNode[$fakeParent] === this

			// Previously inserted (reinserted via keep-alive)
			&& insertNode.parentElement
		) {
			return insertNode;
		}

		const { frag } = this;

		if (insertBeforeNode) {
			const index = frag.indexOf(insertBeforeNode);
			if (index > -1) {
				frag.splice(index, 0, ...insertNodes);
				insertBeforeNode.before(...insertNodes);
			}
		} else {
			const lastNode = frag[frag.length - 1];
			frag.push(...insertNodes);
			lastNode.after(...insertNodes);
		}

		removePlaceholder(this);
	} else if (insertBeforeNode) {
		if (this.childNodes.includes(insertBeforeNode)) {
			insertBeforeNode.before(...insertNodes);
		}
	} else {
		this.append(...insertNodes);
	}

	insertNodes.forEach((node) => {
		patchParentNode(node, this);
	});

	const lastNode = insertNodes[insertNodes.length - 1];
	patchNextSibling(lastNode);

	return insertNode;
}

function appendChild(node) {
	if (
		// Parent already patched
		node[$fakeParent] === this

		// Previously inserted (reinserted via keep-alive)
		&& node.parentElement
	) {
		return node;
	}

	const { frag } = this;
	const lastChild = frag[frag.length - 1];

	lastChild.after(node);
	patchParentNode(node, this);

	removePlaceholder(this);

	frag.push(node);

	return node;
}

const removePlaceholder = (node) => {
	const placeholder = node[$placeholder];
	if (node.frag[0] === placeholder) {
		node.frag.shift();
		placeholder.remove();
	}
};

const innerHTMLDescriptor = {
	set(htmlString) {
		// If it has childrem (non-placeholder), remove them
		if (this.frag[0] !== this[$placeholder]) {
			this.frag.slice().forEach(
				// eslint-disable-next-line unicorn/prefer-dom-node-remove
				child => this.removeChild(child),
			);
		}

		if (htmlString) {
			const domify = document.createElement('div');
			domify.innerHTML = htmlString;

			// Array.from makes a copy of the NodeList, which is live updating as we appendChild
			Array.from(domify.childNodes).forEach((node) => {
				// eslint-disable-next-line unicorn/prefer-dom-node-append
				this.appendChild(node);
			});
		}
	},
	get() {
		return '';
	},
};

const frag = {
	inserted(element) {
		const {
			parentNode,
			nextSibling,
			previousSibling,
		} = element;

		const childNodes = Array.from(element.childNodes);

		// If there are no children, insert a comment placeholder to mark the location
		const placeholder = document.createComment('');

		if (childNodes.length === 0) {
			childNodes.push(placeholder);
		}

		element.frag = childNodes;
		element[$placeholder] = placeholder;

		// Swap element with children (or placeholder)
		const fragment = document.createDocumentFragment();
		fragment.append(...getFragmentLeafNodes(childNodes));
		element.replaceWith(fragment);

		childNodes.forEach((node) => {
			patchParentNode(node, element);
			patchNextSibling(node);
		});

		patchChildNodes(element);

		Object.assign(element, {
			remove,
			appendChild,
			insertBefore,
			removeChild,
			before,
		});

		Object.defineProperty(element, 'innerHTML', innerHTMLDescriptor);

		if (parentNode) {
			Object.assign(parentNode, {
				removeChild,
				insertBefore,
			});
			patchParentNode(element, parentNode);
			patchChildNodes(parentNode);
		}

		if (nextSibling) {
			patchNextSibling(element);
		}

		if (previousSibling) {
			patchNextSibling(previousSibling);
		}
	},

	unbind(element) {
		element.remove();
		// Not necessary to clean up .frag, etc because Node is scrapped
	},
};

export default frag;