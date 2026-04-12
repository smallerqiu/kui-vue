import MarkdownIt from 'markdown-it';
import { type Plugin } from 'vite';

export default function vitePluginKuiMd(): Plugin {
  // 初始化 Markdown 解析器，开启 HTML 支持
  const md = new MarkdownIt({ 
    html: true,
    breaks: true 
  });

  return {
    name: 'vite-plugin-kui-md',
    enforce: 'pre',
    
    transform(code, id) {
      if (!id.endsWith('.md')) return null;

      const demoImports: string[] = [];
      let demoCount = 0;

      // 1. 预处理 Markdown：提取 <code> 标签并替换为占位组件
      // 匹配格式：<code src="./demo/basic.vue">基本用法</code>
      const processedMarkdown = code.replace(/<code\s+src="([^"]+)">([\s\S]*?)<\/code>/g, (_, src, title) => {
        const componentName = `KuiDemo${demoCount++}`;
        demoImports.push(`import ${componentName} from '${src}';`);

        // 返回你期望的渲染结构
        return `
<div class="kui-demo-wrapper">
  <div class="kui-demo-header">${title}</div>
  <div class="kui-demo-content">
    <${componentName} />
  </div>
</div>`;
      });

      // 2. 将处理后的 Markdown（含 Vue 组件标签）转为 HTML
      const mainHtml = md.render(processedMarkdown);

      // 3. 构造最终的 Vue 单文件组件
      return `
<template>
  <div class="kui-markdown-body">
    ${mainHtml}
  </div>
</template>

<script setup>
${demoImports.join('\n')}
</script>

<style scoped>
/* 可以在这里统一定制演示区块的样式 */
.kui-demo-wrapper {
  border: 1px solid #ebedf0;
  border-radius: 2px;
  margin: 16px 0;
}
.kui-demo-header {
  padding: 10px 16px;
  border-bottom: 1px solid #ebedf0;
  font-weight: 500;
  background: #fafafa;
}
.kui-demo-content {
  padding: 16px;
}
/* API 表格基础样式 */
:deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
}
:deep(th), :deep(td) {
  border: 1px solid #f0f0f0;
  padding: 12px;
  text-align: left;
}
:deep(th) {
  background: #fafafa;
}
</style>
      `;
    }
  };
}