/** Select only the API sections belonging to a component in a shared page. */
export function componentDocumentation(
  content: string,
  componentName: string,
  directory: string,
): string {
  const normalize = (name: string) =>
    name
      .replace(/^K(?=[A-Z])/, "")
      .replace(/[-_.`]/g, "")
      .toLowerCase();
  const target = normalize(componentName);
  const primary =
    target === normalize(directory) ||
    (componentName === "ConfigProvider" && directory === "config");
  let active = primary;
  const output: string[] = [];
  for (const line of content.split("\n")) {
    const heading = line.match(/^#{2,6}\s+(.+)$/)?.[1];
    if (heading) {
      const named = heading.match(/^(.+?)\s+(?:API|Props|属性|Events?|事件)$/i)?.[1];
      if (/^(Event API|Events|事件|通用外观|Common appearance)$/i.test(heading)) {
        active = primary;
      } else if (named) {
        active = named.split(/[\s/、]+/).some((name) => normalize(name) === target);
      } else if (/^(API|Props|属性)$/i.test(heading)) {
        active = primary;
      }
    }
    if (active) output.push(line);
  }
  return output.join("\n");
}
