import fs from "node:fs";
import path from "node:path";
import { getComponentNames } from "../plugins/resolver/index.ts";
import {
  getComponentTagNames,
  getPropsData,
  getPropsNameCandidates,
  toKebabCase,
} from "../plugins/resolver/vetur.ts";

const root = path.resolve(import.meta.dirname, "..");
const componentEntry = path.join(root, "components/index.ts");
const site = "https://k-ui.cn";
const checkOnly = process.argv.includes("--check");
const writeGeneratedFile = (file: string, content: string) => {
  if (checkOnly) {
    if (!fs.existsSync(file) || fs.readFileSync(file, "utf8") !== content) {
      throw new Error(`Generated AI asset is out of date: ${path.relative(root, file)}`);
    }
    return;
  }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
};
const componentChildren: Record<string, string[]> = {
  Anchor: ["AnchorLink"],
  AvatarGroup: ["Avatar"],
  Breadcrumb: ["BreadcrumbItem"],
  ButtonGroup: ["Button"],
  Card: ["CardMeta"],
  Carousel: ["CarouselItem"],
  CheckboxGroup: ["Checkbox"],
  CheckCardGroup: ["CheckCard"],
  Collapse: ["CollapsePanel"],
  ColorPicker: ["ColorPickerPanel"],
  DatePicker: ["DatePickerPanel"],
  Descriptions: ["DescriptionsItem"],
  Form: ["FormItem"],
  Grid: ["GridItem"],
  ImageGroup: ["Image"],
  Layout: ["Header", "Sider", "Content", "Footer"],
  Menu: ["MenuItem", "SubMenu", "MenuGroup", "MenuDivider"],
  Modal: ["ModalPanel"],
  Poptip: ["PoptipPanel"],
  Popconfirm: ["PopconfirmPanel"],
  RadioGroup: ["Radio", "RadioButton"],
  Select: ["Option"],
  Skeleton: ["SkeletonAvatar", "SkeletonButton", "SkeletonImage", "SkeletonText"],
  Splitter: ["SplitterPanel"],
  Steps: ["Step"],
  Tabs: ["TabPanel"],
  TimeLine: ["TimeLineItem"],
  Tooltip: ["TooltipPanel"],
  Typography: ["TypographyParagraph", "TypographyText", "TypographyTitle"],
  Row: ["Col"],
};
const componentParents = new Map(
  Object.entries(componentChildren).flatMap(([parent, children]) =>
    children.map((child) => [child, parent] as const)
  )
);

const findDocumentation = (name: string, props: ReturnType<typeof getPropsData>) => {
  const documented = props.find((prop) => fs.existsSync(prop.documentationPath));
  if (documented) return documented.documentationPath;
  const direct = path.join(root, "components", toKebabCase(name), "index.md");
  return fs.existsSync(direct) ? direct : "";
};

const getExamples = (markdownPath: string) => {
  if (!markdownPath) return [];
  const markdown = fs.readFileSync(markdownPath, "utf8");
  return [...markdown.matchAll(/\[([^\]]+)\]\((\.\/demo\/[^)?]+\.(?:vue|tsx))(?:\?[^)]*)?\)/g)]
    .map((match) => {
      const file = path.resolve(path.dirname(markdownPath), match[2]);
      return {
        title: match[1],
        file: path.relative(root, file),
        source: fs.existsSync(file) ? fs.readFileSync(file, "utf8").trim() : "",
      };
    })
    .filter((example) => example.source);
};

const components = getComponentNames().map((name) => {
  const props = getPropsData(componentEntry, getPropsNameCandidates(name));
  const englishProps = getPropsData(componentEntry, getPropsNameCandidates(name), "index.en_US.md");
  const englishByName = new Map(englishProps.map((prop) => [prop.name, prop]));
  const documentationPath = findDocumentation(name, props);
  const slug = documentationPath
    ? path.basename(path.dirname(documentationPath))
    : toKebabCase(name);
  return {
    name,
    tags: getComponentTagNames(name),
    parent: componentParents.get(name),
    children: componentChildren[name] || [],
    documentation: `${site}/components/${slug}`,
    props: props.map(({ name, description, type, eventName, boolean, documented }) => {
      const english = englishByName.get(name);
      return {
        name,
        description: english?.documented ? english.description : description,
        descriptionZh: description,
        descriptionEn: english?.description || description,
        type,
        eventName,
        boolean,
        documented: documented && Boolean(english?.documented),
      };
    }),
    events: props
      .filter((prop) => prop.eventName)
      .map((prop) => {
        const english = englishByName.get(prop.name);
        return {
          name: prop.eventName!,
          type: prop.type,
          description: english?.documented ? english.description : prop.description,
          descriptionZh: prop.description,
          descriptionEn: english?.description || prop.description,
        };
      }),
    examples: getExamples(documentationPath),
  };
});

const metadata = {
  $schema: "https://k-ui.cn/schema/kui-components.schema.json",
  library: "kui-vue",
  version: JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8")).version,
  homepage: site,
  components,
};
const metadataSchema = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "https://k-ui.cn/schema/kui-components.schema.json",
  title: "Kui Vue component metadata",
  type: "object",
  required: ["library", "version", "homepage", "components"],
  properties: {
    $schema: { type: "string", format: "uri" },
    library: { const: "kui-vue" },
    version: { type: "string" },
    homepage: { type: "string", format: "uri" },
    components: {
      type: "array",
      items: {
        type: "object",
        required: ["name", "tags", "children", "documentation", "props", "events", "examples"],
        properties: {
          name: { type: "string" },
          tags: { type: "array", items: { type: "string" } },
          parent: { type: "string" },
          children: { type: "array", items: { type: "string" } },
          documentation: { type: "string", format: "uri" },
          props: { type: "array", items: { $ref: "#/$defs/api" } },
          events: { type: "array", items: { $ref: "#/$defs/api" } },
          examples: {
            type: "array",
            items: {
              type: "object",
              required: ["title", "file", "source"],
              properties: {
                title: { type: "string" },
                file: { type: "string" },
                source: { type: "string" },
              },
            },
          },
        },
      },
    },
  },
  $defs: {
    api: {
      type: "object",
      required: ["name", "description", "descriptionZh", "descriptionEn", "type"],
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        descriptionZh: { type: "string" },
        descriptionEn: { type: "string" },
        type: { type: "string" },
        eventName: { type: "string" },
        boolean: { type: "boolean" },
        documented: { type: "boolean" },
      },
    },
  },
};

const aiDir = path.join(root, "ai");
const publicDir = path.join(root, "public");
const metadataContent = `${JSON.stringify(metadata, null, 2)}\n`;
const schemaContent = `${JSON.stringify(metadataSchema, null, 2)}\n`;
writeGeneratedFile(path.join(aiDir, "kui-components.json"), metadataContent);
writeGeneratedFile(path.join(aiDir, "kui-components.schema.json"), schemaContent);

const componentIndex = components
  .map(
    (component) =>
      `- [${component.name}](${component.documentation}): tags ${component.tags.map((tag) => `\`${tag}\``).join(", ")}`
  )
  .join("\n");
const llms = `# Kui Vue

> Kui Vue is a Vue 3 desktop component library with TypeScript support.

## Install

\`\`\`bash
pnpm add kui-vue kui-icons
\`\`\`

Import \`kui-vue/style/index.css\`, then import components from \`kui-vue\` or install the plugin globally.

## Machine-readable resources

- [Complete AI documentation](${site}/llms-full.txt)
- [Component metadata](${site}/kui-components.json)
- [Documentation](${site}/components)
- [GitHub](https://github.com/smallerqiu/kui-vue)

## Components

${componentIndex}
`;

const fullDocs = components
  .map((component) => {
    const docPath = path.join(
      root,
      "components",
      new URL(component.documentation).pathname.split("/").at(-1)!,
      "index.en_US.md"
    );
    const doc = fs.existsSync(docPath) ? fs.readFileSync(docPath, "utf8").trim() : "";
    return `\n---\n\n${doc || `# ${component.name}\n\nSee ${component.documentation}.`}`;
  })
  .join("\n");

writeGeneratedFile(path.join(publicDir, "llms.txt"), llms);
writeGeneratedFile(path.join(publicDir, "llms-full.txt"), `${llms}\n${fullDocs}\n`);
writeGeneratedFile(path.join(publicDir, "kui-components.json"), metadataContent);
writeGeneratedFile(path.join(publicDir, "schema/kui-components.schema.json"), schemaContent);
console.log(
  `${checkOnly ? "Verified" : "Generated"} AI assets for ${components.length} component exports.`
);
