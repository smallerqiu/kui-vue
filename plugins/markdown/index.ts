import fs from "fs";
import hashId from "hash-sum";
import hljs from "highlight.js";
import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import path from "path";
import { type Plugin } from "vite";

export default function vitePluginKuiMd(): Plugin {
  const markdown: MarkdownIt = new MarkdownIt({
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

      // \[(.*?)\]\((.*?\.vue)\) : 匹配 [标题](./路径.vue)
      // \s*\n\s*-\s+(.*)       : 匹配换行后的横杠及其后面的描述内容
      const demoReg = /\[(.*?)\]\((.*?\.vue)(?:\?show=(.*?))?\)\s*\n\s*-\s+(.*)/g;

      let processedMarkdown = code.replace(
        demoReg,
        (_, title, src, direction = "horizontal", description) => {
          const componentName = `KuiDemo${demoCount++}`;
          const _id = "k-" + hashId(id);

          const absolutePath = path.resolve(path.dirname(id), src);
          let demoCode = fs.readFileSync(absolutePath, "utf-8").trim();
          let highlighted = hljs.highlight(demoCode, {
            language: "html",
          }).value;

          highlighted = highlighted.replace(/{{/g, "&#123;&#123;").replace(/}}/g, "&#125;&#125;");

          demoImports.push(`import ${componentName} from '${src}';`);
          description = markdown.render(description);
          return `
<Demo id="${_id}" direction="${direction}">
    <template #title>${title}</template>
    <template #component><${componentName} /></template>
    <template #code><pre><code class="hljs language-js">${highlighted.replace(/\n/g, "<br>")}</code></pre></template>
    <template #description>
      ${description.trim().replace(/\n/g, "<br>")}
    </template>
</Demo>`;
        }
      );

      const jsxReg = /\[(.*?)\]\((.*?\.tsx)\)/g;

      processedMarkdown = processedMarkdown.replace(jsxReg, (_, t, src) => {
        console.log(t, src);
        const componentName = `KuiDemo${demoCount++}`;
        demoImports.push(`import ${componentName} from '${src}';`);
        return `<${componentName} />`;
      });

      fs.writeFileSync(path.join(__dirname, "demo.md"), processedMarkdown);
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
      fs.writeFileSync(path.join(__dirname, "demo.html"), result);
      return { code: result, map: null };
    },
  };
}
