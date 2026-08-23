interface LegacyVNode {
  eml?: unknown;
  tag?: unknown;
  text?: string;
  componentOptions?: { Ctor?: { extendOptions?: { name?: string } } };
}

export function isEmptyNode(vnode: LegacyVNode = {}) {
  return !(vnode.eml || vnode.tag || (vnode.text && vnode.text.trim() !== ""));
}

export function getChildren(children: LegacyVNode[] = [], name: string) {
  // return child.filter(c => !isEmptyNode(c, name) )
  return children.filter((c) => {
    let tag_name = "";
    if (name && c.componentOptions != null && c.componentOptions.Ctor != undefined) {
      tag_name = c.componentOptions.Ctor.extendOptions?.name ?? "";
    }
    if (!isEmptyNode(c) && name !== tag_name) {
      return true;
    } else {
      return false;
    }
  });
}

//此处不能判断数组，要判断数组自行判断
export function isNotEmpty(value: unknown) {
  return value !== "" && value !== undefined && value !== null;
}
export function isEmpty(value: unknown) {
  return (
    value === "" ||
    value === undefined ||
    value === null ||
    ((typeof value === "string" || Array.isArray(value)) && value.length === 0)
  );
}
