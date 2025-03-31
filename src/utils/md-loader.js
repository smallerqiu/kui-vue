const MarkdownIt = require('markdown-it');
const { parse } = require('@vue/compiler-sfc');
const anchor = require('markdown-it-anchor');

const markdown = new MarkdownIt({
  html: true,
  breaks: true,
}).use(anchor, {
  level: 2,
  slugify: string => string.toLocaleLowerCase().trim().split(' ').join('-'),
  permalink: anchor.permalink.headerLink(),
  permalinkClass: 'anchor',
  permalinkSymbol: '#',
  permalinkBefore: false,
});

const tagCNReg = /<cn\b[^>]*>(.*?)<\/cn>/gs;
const tagTemReg = /<template\b[^>]*>(.*?)<\/template>/gs;

markdown.core.ruler.push('render', ({ tokens }) => {
  let cnHtml = null;
  tokens.forEach((token, i) => {
    if (token.type === 'html_block') {
      if (token.content.match(tagCNReg)) {
        matches = tagCNReg.exec(token.content);
        if (matches && matches.length > 1) {
          cnHtml = markdown.render(matches[1])
        }
        token.content = ''
      }
    }
    if (token.info === 'vue') {
      const { descriptor } = parse(token.content);
      const { template, script, scriptSetup, styles } = descriptor;
      let code = '```html\n' + token.content + '\n```';
      if (template) {
        const codeHtml = markdown.render(code);
        let newContent = `
<template>
  <Demo>
    <template v-slot:component>${template.content}</template>
    <template v-slot:description>${cnHtml}</template>
    <template v-slot:code>${codeHtml}</template>
  </Demo>
</template>`;

        // 处理普通 <script>
        if (script) {
          script.forEach(s => {
            newContent += `<script>${s.content}</script>`;
          });
        }

        // 处理 <script setup>
        if (scriptSetup) {
          newContent += `<script setup>${scriptSetup.content}</script>`;
        }

        // 处理 <style>
        styles.forEach(style => {
          newContent += `<style ${style.scoped ? 'scoped' : ''} ${style.lang ? 'lang="' + style.lang + '"' : ''}>${style.content}</style>`;
        });

        token.content = newContent;
        token.type = 'html_block';
      }
    }
  });
});

const addVuePreviewAttr = function (str) {
  return str.replace(/(<pre|<code)/g, '$1 v-pre');
};

['code_inline', 'code_block', 'fence'].forEach(rule => {
  let defRules = markdown.renderer.rules;
  let defRule = markdown.renderer.rules[rule];
  defRules[rule] = function () {
    return addVuePreviewAttr(defRule.apply(this, arguments));
  }
});

module.exports = function (source) {
  this.cacheable && this.cacheable();
  let result = markdown.render(source);
  if (!result.match(tagTemReg)) {
    result = `<template><div class="markdown-body">${result}</div></template>`;
  }
  return result;
};