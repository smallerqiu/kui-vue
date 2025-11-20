import { parse } from '@vue/compiler-sfc'

export default function vitePlugin() {
  return {
    name: 'vite-plugin',
    enforce: 'pre',
    transform(src, id) {
      if (src) {
        const block = src.trim();
        const { descriptor } = parse(block);
        const { template, script, scriptSetup, styles } = descriptor
        let result = `
<template>
  <Demo>
    <template #component>${template?.content || ''}</template>
  </Demo>
</template>
`;
        if (scriptSetup?.content) {
          result += `<script setup>${scriptSetup.content}</script>`;
        } else if (script?.content) {
          result += `<script>${script.content}</script>`;
        }
        if (Array.isArray(styles) && styles.length) {
          styles.forEach(s => {
            result += `<style ${s.scoped ? 'scoped' : ''} ${s.lang ? `lang="${s.lang}"` : ''}>${s.content}</style>`;
          });
        }

        return { code: result, map: null };
      }
      const wrapped = `<template><div>no data</div></template>`;
      return { code: wrapped, map: null };
    }
  }
}