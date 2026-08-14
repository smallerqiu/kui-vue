import fs from "fs";
import hashId from "hash-sum";
import hljs from "highlight.js";
import MarkdownIt, { type MarkdownIt as MarkdownItType } from "markdown-it";
import anchor from "markdown-it-anchor";
import path from "path";
import { transform } from "sucrase";
import { type Plugin } from "vite";

const escapeTemplateInterpolation = (code: string) =>
  code.replace(/{{/g, "&#123;&#123;").replace(/}}/g, "&#125;&#125;");

const highlightSfc = (code: string) =>
  escapeTemplateInterpolation(hljs.highlight(code, { language: "html" }).value).replace(
    /\n/g,
    "<br>"
  );

export const toJavaScriptSfc = (source: string) =>
  source.replace(
    /<script([^>]*)\blang\s*=\s*["']ts["']([^>]*)>([\s\S]*?)<\/script>/gi,
    (_, beforeLang: string, afterLang: string, script: string) => {
      const attributes = `${beforeLang}${afterLang}`.trim();
      const output = transform(script, {
        transforms: ["typescript"],
        disableESTransforms: true,
      }).code.trim();
      return `<script${attributes ? ` ${attributes}` : ""}>\n${output}\n</script>`;
    }
  );

export default function vitePluginKuiMd(): Plugin {
  const markdown: MarkdownItType = new MarkdownIt({
    html: true,
    breaks: true,
    highlight: (code: string, lang: string) => {
      if (lang && hljs.getLanguage(lang)) {
        return `<pre><code class="hljs language-${lang}">${hljs.highlight(code, { language: lang }).value}</code></pre>`;
      }
      return `<pre><code class="hljs">${markdown.utils.escapeHtml(code)}</code></pre>`;
    },
  }).use(anchor, {
    level: 2,
    slugify: (string: string) => string.toLocaleLowerCase().trim().split(" ").join("-"),
    permalink: anchor.permalink.headerLink(),
    permalinkClass: "anchor",
    permalinkSymbol: "#",
    permalinkBefore: false,
  });

  return {
    name: "vite-plugin-kui-md",
    enforce: "pre",

    transform(code, id) {
      if (!id.endsWith(".md")) return null;

      const demoImports: string[] = [];
      let demoCount = 0;

      const demoReg =
        /\[(.*?)\]\((.*?\.(?:vue|tsx))(\?[^)]*)?\)(?:\s*\n((?:\s*-\s+.*(?:\n|$))+))?/g;

      const processedMarkdown = code.replace(
        demoReg,
        (_, title: string, src: string, query = "", descBlock = "") => {
          const componentName = `KuiDemo${demoCount++}`;
          const params = new URLSearchParams(query.replace(/^\?/, ""));
          const direction = params.get("show") === "vertical" ? "vertical" : "horizontal";
          const useDemo = params.get("demo") !== "false";

          demoImports.push(`import ${componentName} from '${src}';`);
          if (!useDemo) return `<${componentName} />`;

          const _id = "k-" + hashId(id);
          const absolutePath = path.resolve(path.dirname(id), src);
          const demoCode = fs.readFileSync(absolutePath, "utf-8").trim();
          const highlightedTypeScript = highlightSfc(demoCode);
          const highlightedJavaScript = highlightSfc(toJavaScriptSfc(demoCode));
          const renderedDescription = descBlock
            ? markdown.render(descBlock.replace(/^\s*-\s?/gm, ""))
            : "";
          return `
<Demo id="${_id}" direction="${direction}">
    <template #title>${title}</template>
    <template #component><${componentName} /></template>
    <template #code-ts><pre><code class="hljs language-html">${highlightedTypeScript}</code></pre></template>
    <template #code-js><pre><code class="hljs language-html">${highlightedJavaScript}</code></pre></template>
    <template #description>
      ${renderedDescription.trim().replace(/\n/g, "<br>")}
    </template>
</Demo>\n`;
        }
      );

      // fs.writeFileSync(path.join(import.meta.dirname, "demo.md"), processedMarkdown);
      const mainHtml = markdown.render(processedMarkdown);
      const result = `
<template>
  <div class="markdown-body">
    ${mainHtml}
  </div>
</template>

<script setup>
import { message } from "kui-vue";
${demoImports.join("\n")}
const copy = (text) => {
  navigator.clipboard.writeText(text);
  message.success("Copied.");
};
</script>`;
      // fs.writeFileSync(path.join(import.meta.dirname, "demo.html"), result);
      return { code: result, map: null };
    },
  };
}
