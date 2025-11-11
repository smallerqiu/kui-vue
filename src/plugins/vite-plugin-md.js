import MarkdownIt from 'markdown-it'
import { parseComponent } from 'vue-template-compiler'
import anchor from 'markdown-it-anchor'
import hljs from 'highlight.js'

export default function vitePluginMd() {

  const markdown = new MarkdownIt({
    html: true,
    breaks: true,
    highlight(code, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return `<pre><code class="hljs language-${lang}">${hljs.highlight(code, { language: lang }).value}</code></pre>`
      }
      return `<pre><code class="hljs">${markdown.utils.escapeHtml(code)}</code></pre>`
    }
  }).use(anchor, {
    level: 2,
    slugify: (string) =>
      string.toLocaleLowerCase().trim().split(' ').join('-'),
    permalink: anchor.permalink.headerLink(),
    permalinkClass: 'anchor',
    permalinkSymbol: '#',
    permalinkBefore: false
  })

  return {
    name: 'vite-plugin-md',
    enforce: 'pre',
    transform(src, id) {
      if (!id.endsWith('.md')) return null;

      // 1) optional <cn> block (for description)
      const tagCNReg = /<cn\b[^>]*>(.*?)<\/cn>/gs;
      let cnHtml = null;
      const cnMatch = tagCNReg.exec(src);
      if (cnMatch && cnMatch[1]) {
        cnHtml = new MarkdownIt({ html: true, breaks: true }).render(cnMatch[1]);
      }

      // 2) detect first ```vue fenced block
      const fenceRE = /```vue([\s\S]*?)```/m;
      const m = fenceRE.exec(src);

      if (m) {
        const block = m[1].trim();
        const { template, script, styles } = parseComponent(block);

        // pretty code preview
        let codeHtml = markdown.render('```html\n' + block + '\n```') //new MarkdownIt({ html: true, breaks: true }).render('```html\n' + block + '\n```');
        codeHtml = codeHtml.replace(/{{/g, '<span class="hljs-tag">&#123;</span><span class="hljs-tag">&#123;</span>').replace(/}}/g, '&#125;&#125;');
        let result = `
<template>
  <Demo>
    <template slot="component">${template?.content || ''}</template>
    <template slot="description">${cnHtml || ''}</template>
    <template slot="code">${codeHtml}</template>
  </Demo>
</template>
`;

        if (script?.content) {
          result += `<script>${script.content}</script>`;
        }
        if (Array.isArray(styles) && styles.length) {
          styles.forEach(s => {
            result += `<style ${s.scoped ? 'scoped' : ''} ${s.lang ? `lang="${s.lang}"` : ''}>${s.content}</style>`;
          });
        }

        return { code: result, map: null };
      }

      // 3) no ```vue block -> render normal markdown into a single SFC template
      const html = markdown.render(src);
      const wrapped = `<template><div class="markdown-body">${html}</div></template>`;
      return { code: wrapped, map: null };
    }
  }
}