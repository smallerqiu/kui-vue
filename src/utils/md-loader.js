const MarkdownIt = require('markdown-it');
const { parseComponent } = require('@vue/compiler-sfc');
// const Token = require('markdown-it/lib/token');
// const loaderUtils = require('loader-utils');
const anchor = require('markdown-it-anchor')

const markdown = new MarkdownIt({
  html: true,
  breaks: true,
  // highlight: renderHighlight,
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
// const escapeHtml =(html)=> {
//   const entities = {
//     '&': '&amp;',
//     '<': '&lt;',
//     '>': '&gt;',
//     '"': '&quot;',
//     "'": '&#39;'
//   };
//   return html.replace(/[&<>"']/g, match => entities[match]);
// }
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
      const { template, script, styles } = parseComponent(token.content);
      // console.warn(styles)
      let code = '```html\n' + token.content + '\n```';
      if (template) {
        const codeHtml = markdown.render(code);
        let newContent = `
    <template>
      <Demo>
        <template slot="component">${template.content}</template>
        <template slot="description">${cnHtml}</template>
        <template slot="code">${codeHtml}</template>
      </Demo>
    </template>`;
        newContent += script ? `<script>${script.content}</script>` : '';
        styles.forEach(style => {
          newContent += `<style ${style.scoped ? 'scoped' : ''} ${style.lang ? 'lang="' + style.lang + '"' : ''} >${style.content}</style>`
        });
        token.content = newContent
        token.type = 'html_block'
      }
    }
  });
});

const addVuePreviewAttr = function (str) {
  return str.replace(/(<pre|<code)/g, '$1 v-pre');
};
['code_inline', 'code_block', 'fence'].forEach(rule => {
  let defRules = markdown.renderer.rules
  let defRule = markdown.renderer.rules[rule]
  defRules[rule] = function () {
    return addVuePreviewAttr(defRule.apply(this, arguments))
  }
});
module.exports = function (source) {
  this.cacheable && this.cacheable();
  // var options = loaderUtils.getOptions(this);
  let result = markdown.render(source);
  if (!result.match(tagTemReg)) {
    result = `<template><div class="markdown-body">${result}</div></template>`
    //todo:如果result 里面有script要移出来放外面。
  } else {
    // result = `<div class="markdown-body">${result}</div>`
  }
  // console.log(result)
  return result;
};