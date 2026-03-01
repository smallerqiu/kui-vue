<cn>
### 基础用法（侧边栏目录）
最常见的场景：右侧显示长文章，左侧或右侧固定锚点导航。
</cn>
<en>
### Basic Usage (Sidebar Navigation)
The most common scenario: displaying a long article on the right with fixed anchor navigation on the left or right side.
</en>

```vue
<template>
  <k-layout style="background: #fff; padding: 24px;max-height:500px;overflow:auto;" class="anchor-d1">
    <k-row :gutter="24">
      <k-col :span="18">
        <section id="part-1" style="height: 500px; background: #fafafa; margin-bottom: 20px; padding: 20px;">
          <h2>Part 1：Basic</h2>
          <p>Here is the basic content...</p>
        </section>
        <section id="part-2" style="height: 500px; background: #f0f2f5; margin-bottom: 20px; padding: 20px;">
          <h2>Part 2：Guide</h2>
          <p>Here is the advanced content...</p>
        </section>
        <section id="part-3" style="height: 500px; background: #fafafa; padding: 20px;">
          <h2>Part 3：FQA</h2>
          <p>Here is the FAQ content...</p>
        </section>
      </k-col>
      <k-col :span="6">
        <k-anchor :offsetTop="20" container=".anchor-d1">
          <k-anchor-link href="#part-1" title="Basic" />
          <k-anchor-link href="#part-2" title="Guide" />
          <k-anchor-link href="#part-3" title="FAQ" />
        </k-anchor>
      </k-col>
    </k-row>
  </k-layout>
</template>
```
