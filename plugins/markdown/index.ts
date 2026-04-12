import fs from "fs";
import hashId from "hash-sum";
import hljs from "highlight.js";
import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import path from "path";
import { type Plugin } from "vite";

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
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
  })
  .use(anchor, {
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

      const vertical_list = [
        "table",
        "grid",
        "row-col/demo",
        "dark-mode",
        "flex",
        "layout/demo",
        "space",
        "menu",
        "page",
        "tabs",
        "descriptions",
        "skeleton",
        "form/",
        "anchor/",
        "input/demo/group",
        "slider/demo/marks",
        "tree/demo/directory",
        "views/language/demo",
        "stat-card/demo/card",
      ];
      let direction = "horizontal";
      vertical_list.forEach((item) => {
        if (id.includes(item)) {
          direction = "vertical";
        }
      });

      const demoImports: string[] = [];
      let demoCount = 0;

      // \[(.*?)\]\((.*?\.vue)\) : 匹配 [标题](./路径.vue)
      // \s*\n\s*-\s+(.*)       : 匹配换行后的横杠及其后面的描述内容
      const reg = /\[(.*?)\]\((.*?\.vue)\)\s*\n\s*-\s+(.*)/g;

      const processedMarkdown = code.replace(reg, (_, title, src, description) => {
        const componentName = `KuiDemo${demoCount++}`;
        const _id = "k-" + hashId(id);

        const absolutePath = path.resolve(path.dirname(id), src);
        let demoCode = fs.readFileSync(absolutePath, "utf-8");
        // demoCode = escapeHtml(demoCode);
        demoCode = markdown.render("```html\n" + demoCode + "\n```");
        demoCode = demoCode
          .replace(
            /{{/g,
            '<span class="hljs-tag">&#123;</span><span class="hljs-tag">&#123;</span>'
          )
          .replace(/}}/g, "&#125;&#125;")
          .replace(/<br>/g, "<br />");
        demoImports.push(`import ${componentName} from '${src}';`);

        return `



<Demo id="${_id}" direction="${direction}" title="${title}" description="${description}">
    <template #component><${componentName} /></template>
    <template #code>${demoCode}</template>
</Demo>



`;
      });

      const mainHtml = markdown.render(processedMarkdown);
      // console.log(processedMarkdown);
      const result = `
<template>
  <div class="markdown-body">
    ${mainHtml}
  </div>
</template>

<script setup>
${demoImports.join("\n")}
</script>`;
      // console.log(result);

      return { code: result, map: null };
    },
  };
}
