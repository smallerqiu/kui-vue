import { defineComponent, ref, getCurrentInstance } from "vue"

const Demo = defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()
    const strTemp = `<template>
  <Space style="font-size:2px;" vertical>
    简单数字输入框: {{ value1 }}
    <InputNumber disabled v-model="value1" />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const value1 = ref("1"); 
</script>`

    // 提取 template 和 script 部分
    const extractTemplate = (str) => {
      const templateMatch = str.match(/<template>([\s\S]*)<\/template>/)
      const scriptMatch = str.match(/<script setup>([\s\S]*)<\/script>/)
      return {
        template: templateMatch ? templateMatch[1].trim() : '',
        script: scriptMatch ? scriptMatch[1].trim() : ''
      }
    }

    // 动态创建组件
    const createDynamicComponent = () => {
      const { template, script } = extractTemplate(strTemp)
      
      // 在 Vue 2.7 中编译组件
      try {
        const componentOptions = {
          template: `<div>${template}</div>`,
          // 处理 script 逻辑
          setup() {
            // 这里需要解析并执行 script 中的逻辑
            // 简化处理，实际项目中可能需要更复杂的解析
            return {
              value1: ref("1")
            }
          }
        }
        
        return proxy.$root.constructor.extend(componentOptions)
      } catch (error) {
        console.error('组件编译失败:', error)
        return null
      }
    }

    const DynamicComponent = createDynamicComponent()

    return () => (
      <div>
        {DynamicComponent ? h(DynamicComponent) : <div>组件加载失败</div>}
      </div>
    )
  }
})