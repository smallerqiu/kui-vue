import fs from "node:fs";
import { syncDocumentation } from "./api-docs.ts";
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
    children.map((child) => [child, parent] as const),
  ),
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

const getSlots = (markdownPath: string) => {
  if (!markdownPath || !fs.existsSync(markdownPath)) return [];
  const markdown = fs.readFileSync(markdownPath, "utf8");
  const section = markdown.match(/(?:^|\n)## Slots\s*\n([\s\S]*?)(?=\n## |$)/i)?.[1] || "";
  return section
    .split("\n")
    .filter((line) => /^\s*\|/.test(line))
    .map((line) =>
      line
        .trim()
        .replace(/^\||\|$/g, "")
        .split("|")
        .map((cell) => cell.trim().replace(/^`|`$/g, "")),
    )
    .filter(
      (cells) => cells.length >= 2 && !/^(name|名称)$/i.test(cells[0]) && !/^[-:]+$/.test(cells[0]),
    )
    .map(([name, description, scope]) => ({ name, description, scope: scope || undefined }));
};

const behaviors = JSON.parse(
  fs.readFileSync(path.join(root, "ai/behaviors.json"), "utf8"),
) as Record<
  string,
  { rules: string[]; methods?: string[]; slots?: string[]; slotsComplete?: boolean }
>;
const descriptions = JSON.parse(
  fs.readFileSync(path.join(root, "ai/descriptions.json"), "utf8"),
) as Record<string, Record<string, { zh: string; en: string }>>;
const components = getComponentNames().map((name) => {
  const props = getPropsData(componentEntry, getPropsNameCandidates(name), "index.md", true);
  const englishProps = getPropsData(
    componentEntry,
    getPropsNameCandidates(name),
    "index.en_US.md",
    true,
  );
  const englishByName = new Map(englishProps.map((prop) => [prop.name, prop]));
  for (const [entries, language] of [
    [props, "zh"],
    [englishProps, "en"],
  ] as const) {
    for (const prop of entries) {
      const note = descriptions[name]?.[prop.name]?.[language];
      if (note) prop.description = note;
      if (prop.eventName?.startsWith("update:")) {
        const model = prop.eventName.slice(7);
        const target = entries.find((entry) => entry.name === model);
        const binding = model === "modelValue" ? "v-model" : `v-model:${model}`;
        if (!target) throw new Error(`Missing model prop: ${name}.${model}`);
        prop.description =
          language === "zh"
            ? `请求更新 ${model}（${target.description}），参数为更新后的值。使用 ${binding} 时由 Vue 自动同步绑定值，无需另写更新处理器。`
            : `Requests a new ${model} value (${target.description}); the payload is the new value. With ${binding}, Vue synchronizes the binding automatically; no additional update handler is needed.`;
      }
    }
  }
  const documentationPath = findDocumentation(name, props);
  const englishDocumentationPath = documentationPath
    ? path.join(path.dirname(documentationPath), "index.en_US.md")
    : "";
  const documentedSlots = getSlots(documentationPath);
  const slots = [
    ...documentedSlots,
    ...(behaviors[name]?.slots || [])
      .filter((slot) => !documentedSlots.some((item) => item.name === slot))
      .map((slot) => ({
        name: slot,
        description: `Supported ${slot} slot on ${name}`,
        scope: undefined,
      })),
  ];
  const englishSlots = new Map(getSlots(englishDocumentationPath).map((slot) => [slot.name, slot]));
  const slug = documentationPath
    ? path.basename(path.dirname(documentationPath))
    : toKebabCase(name);
  return {
    name,
    behavior: behaviors[name] || { rules: [] },
    models: props
      .filter((p) => p.eventName?.startsWith("update:"))
      .map((p) => ({
        prop: p.eventName!.slice(7),
        event: p.eventName!,
        directive:
          p.eventName === "update:modelValue" ? "v-model" : `v-model:${p.eventName!.slice(7)}`,
      })),
    tags: [
      ...new Set([
        name,
        ...(name.startsWith("K") ? [] : [`K${name}`, `k-${toKebabCase(name)}`]),
        ...getComponentTagNames(name),
      ]),
    ],
    parent: componentParents.get(name),
    children: componentChildren[name] || [],
    documentation: `${site}/components/${slug}`,
    props: props.map(
      ({
        name,
        description,
        type,
        eventName,
        boolean,
        documented,
        enumValues,
        required,
        defaultExpression,
      }) => {
        const english = englishByName.get(name);
        return {
          name,
          description: english?.description || description,
          descriptionZh: description,
          descriptionEn: english?.description || description,
          type,
          eventName,
          boolean,
          enumValues,
          required,
          defaultExpression,
          documented: documented && Boolean(english?.documented),
        };
      },
    ),
    events: props
      .filter((prop) => prop.eventName)
      .map((prop) => {
        const english = englishByName.get(prop.name);
        return {
          name: prop.eventName!,
          type: prop.type,
          description: english?.description || prop.description,
          descriptionZh: prop.description,
          descriptionEn: english?.description || prop.description,
        };
      }),
    slots: slots.map((slot) => {
      const english = englishSlots.get(slot.name);
      return {
        name: slot.name,
        description: english?.description || slot.description,
        descriptionZh: slot.description,
        descriptionEn: english?.description || slot.description,
        scope: english?.scope || slot.scope,
      };
    }),
    examples: getExamples(documentationPath),
  };
});

for (const [component, fields] of Object.entries(descriptions)) {
  const target = components.find((entry) => entry.name === component);
  for (const [field, note] of Object.entries(fields)) {
    if (!target?.props.some((prop) => prop.name === field) || !note.zh?.trim() || !note.en?.trim())
      throw new Error(`Invalid description supplement: ${component}.${field}`);
  }
}
if (process.argv.includes("--docs") || process.argv.includes("--check-docs")) {
  syncDocumentation(root, components, process.argv.includes("--check-docs"));
  process.exit(0);
}
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
        required: [
          "name",
          "tags",
          "children",
          "documentation",
          "props",
          "events",
          "slots",
          "examples",
        ],
        properties: {
          name: { type: "string" },
          behavior: {
            type: "object",
            required: ["rules"],
            properties: {
              rules: { type: "array", items: { type: "string" } },
              methods: { type: "array", items: { type: "string" } },
              slots: { type: "array", items: { type: "string" } },
              slotsComplete: { type: "boolean" },
            },
          },
          models: {
            type: "array",
            items: {
              type: "object",
              required: ["prop", "event", "directive"],
              properties: {
                prop: { type: "string" },
                event: { type: "string" },
                directive: { type: "string" },
              },
            },
          },
          tags: { type: "array", items: { type: "string" } },
          parent: { type: "string" },
          children: { type: "array", items: { type: "string" } },
          documentation: { type: "string", format: "uri" },
          props: { type: "array", items: { $ref: "#/$defs/api" } },
          events: { type: "array", items: { $ref: "#/$defs/api" } },
          slots: { type: "array", items: { $ref: "#/$defs/slot" } },
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
        enumValues: { type: "array", items: { type: ["string", "number", "boolean"] } },
        required: { type: "boolean" },
        defaultExpression: { type: "string" },
        documented: { type: "boolean" },
      },
    },
    slot: {
      type: "object",
      required: ["name", "description", "descriptionZh", "descriptionEn"],
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        descriptionZh: { type: "string" },
        descriptionEn: { type: "string" },
        scope: { type: "string" },
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
      `- [${component.name}](${component.documentation}): tags ${component.tags.map((tag) => `\`${tag}\``).join(", ")}`,
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
      "index.en_US.md",
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
  `${checkOnly ? "Verified" : "Generated"} AI assets for ${components.length} component exports.`,
);
