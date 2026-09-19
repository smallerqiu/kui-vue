import { baseParse, ElementTypes, NodeTypes, parserOptions } from "@vue/compiler-dom";

const canonical = (name) => name.replace(/-/g, "").toLowerCase();
const nativeEvents = new Set([
  "click",
  "dblclick",
  "focus",
  "blur",
  "focusin",
  "focusout",
  "keydown",
  "keyup",
  "keypress",
  "mouseenter",
  "mouseleave",
  "mousemove",
  "mousedown",
  "mouseup",
  "pointerdown",
  "pointerup",
  "input",
  "change",
  "submit",
  "reset",
  "scroll",
  "wheel",
  "contextmenu",
  "dragstart",
  "dragend",
  "drop",
]);
const attributes = new Set([
  "class",
  "style",
  "id",
  "key",
  "ref",
  "role",
  "title",
  "tabindex",
  "name",
  "type",
  "autofocus",
  "autocomplete",
  "placeholder",
  "maxlength",
  "minlength",
  "min",
  "max",
  "step",
  "pattern",
  "inputmode",
  "accept",
  "rows",
  "cols",
  "readonly",
  "required",
  "for",
  "href",
  "target",
  "rel",
]);

// Deliberately never evaluate user expressions. Only unambiguous literals are checked.
const literal = (expression) => {
  const text = expression?.trim() || "";
  if (/^(true|false|null|-?\d+(?:\.\d+)?)$/.test(text))
    return { known: true, value: JSON.parse(text) };
  if (/^"(?:[^"\\]|\\.)*"$/.test(text)) return { known: true, value: JSON.parse(text) };
  if (/^'[^'\\]*'$/.test(text)) return { known: true, value: text.slice(1, -1) };
  return { known: false };
};

export function validateUsage(source, metadata) {
  const tags = new Map(
    metadata.components.flatMap((c) => [c.name, ...c.tags].map((t) => [t.toLowerCase(), c])),
  );
  const issues = [];
  const skipped = [];
  const add = (kind, message, node, extra = {}) =>
    issues.push({
      kind,
      message,
      line: node.loc?.start.line,
      column: node.loc?.start.column,
      ...extra,
    });
  let ast;
  try {
    ast = baseParse(source, {
      ...parserOptions,
      onError: (error) => add("syntax", error.message, error),
      parseMode: "html",
    });
  } catch (error) {
    add("syntax", error.message, error);
    return { valid: false, issues, skipped, scope: "static-template", complete: false };
  }
  const visit = (node, owner) => {
    if (node.type !== NodeTypes.ELEMENT) {
      node.children?.forEach((child) => visit(child, owner));
      return;
    }
    if (["script", "style"].includes(node.tag.toLowerCase())) return;
    const component =
      node.tagType === ElementTypes.COMPONENT ? tags.get(node.tag.toLowerCase()) : undefined;
    if (component) {
      const props = new Map(
        component.props.filter((p) => !p.eventName).map((p) => [canonical(p.name), p]),
      );
      const events = new Set(component.events.map((e) => canonical(e.name)));
      const present = new Set();
      let spread = false;
      for (const attr of node.props) {
        if (attr.type === NodeTypes.DIRECTIVE && attr.name === "on") {
          if (!attr.arg?.isStatic) {
            skipped.push("dynamic events");
            continue;
          }
          const event = attr.arg.content;
          if (!events.has(canonical(event)) && !nativeEvents.has(event.toLowerCase()))
            add("event", `Unknown event ${event} on ${component.name}`, attr, {
              component: component.name,
              event,
            });
          continue;
        }
        let name;
        let value = { known: false };
        if (attr.type === NodeTypes.ATTRIBUTE) {
          name = attr.name;
          value = { known: true, value: attr.value?.content ?? "" };
        } else if (attr.type === NodeTypes.DIRECTIVE && ["bind", "model"].includes(attr.name)) {
          if ((attr.arg && !attr.arg.isStatic) || (attr.name === "bind" && !attr.arg)) {
            spread = true;
            skipped.push("dynamic or spread bindings");
            continue;
          }
          name = attr.arg?.content || "modelValue";
          if (attr.name === "model") {
            if (!events.has(canonical(`update:${name}`)))
              add("model", `No update:${name} event on ${component.name}`, attr, {
                component: component.name,
                prop: name,
              });
          } else value = literal(attr.exp?.content);
          if (!value.known) skipped.push("binding expression types");
        }
        if (!name) continue;
        present.add(canonical(name));
        const prop = props.get(canonical(name));
        if (!prop) {
          if (!attributes.has(name.toLowerCase()) && !/^(aria-|data-)/i.test(name))
            add("prop", `Unknown prop ${name} on ${component.name}`, attr, {
              component: component.name,
              prop: name,
            });
          continue;
        }
        if (!value.known) continue;
        // Bare boolean attributes are valid; string "false" is not a false boolean.
        const actual =
          prop.boolean && value.value === "" && attr.type === NodeTypes.ATTRIBUTE
            ? true
            : value.value;
        if (prop.enumValues && !prop.enumValues.includes(actual))
          add(
            "value",
            `Invalid ${name} on ${component.name}; expected ${prop.enumValues.map((v) => JSON.stringify(v)).join(" | ")}`,
            attr,
            { component: component.name, prop: name },
          );
        else if (prop.boolean && typeof actual !== "boolean")
          add("value", `${name} requires a boolean binding`, attr, {
            component: component.name,
            prop: name,
          });
        else if (/^number(?: \| undefined)?$/.test(prop.type) && typeof actual !== "number")
          add("value", `${name} requires a numeric binding`, attr, {
            component: component.name,
            prop: name,
          });
      }
      if (!spread)
        for (const prop of props.values())
          if (prop.required && !present.has(canonical(prop.name)))
            add("required", `Missing required prop ${prop.name} on ${component.name}`, node, {
              component: component.name,
              prop: prop.name,
            });
    } else if (node.tagType === ElementTypes.COMPONENT)
      skipped.push(`unresolved component: ${node.tag}`);
    const slotOwner = node.tag === "template" ? owner : component;
    for (const attr of node.props) {
      if (attr.type !== NodeTypes.DIRECTIVE || attr.name !== "slot") continue;
      if (!slotOwner?.behavior?.slotsComplete) {
        skipped.push("slots without a complete contract");
        continue;
      }
      if (attr.arg && !attr.arg.isStatic) {
        skipped.push("dynamic slots");
        continue;
      }
      const name = attr.arg?.content || "default";
      if (!slotOwner.behavior.slots.includes(name))
        add("slot", `Unknown slot ${name} on ${slotOwner.name}`, attr, {
          component: slotOwner.name,
          slot: name,
        });
    }
    node.children.forEach((child) =>
      visit(child, component || (node.tag === "template" ? owner : undefined)),
    );
  };
  visit(ast);
  return {
    valid: issues.length === 0,
    issues,
    skipped: [...new Set(skipped)],
    scope: "static-template",
    complete: false,
    nextStep:
      "Run the application's vue-tsc --noEmit and interaction tests. Static checks do not validate imports, arbitrary expressions or runtime behavior.",
  };
}
