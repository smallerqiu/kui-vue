# Icon

Version 5.x reintroduces icon sets, supporting more icons.
To use the icon component, you need to install the `kui-icons` package:

```bash
npm install --save kui-icons
```

Use

```html
<template>
  <Icon :type="Heart" />
</template>
<script setup lang="ts">
  import { Heart } from "kui-icons";
</script>
```

<KuiDemo2 />


<Demo id="k-29abcaf7" direction="horizontal">
    <template #title>Basic Usage</template>
    <template #component><KuiDemo0 /></template>
    <template #code><pre><code class="hljs language-js"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span><br>  <span class="hljs-tag">&lt;<span class="hljs-name">Space</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;House&quot;</span> /&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;Heart&quot;</span> /&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;LogoKui&quot;</span> /&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;LogoKui&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#00be83&quot;</span> /&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;Loading&quot;</span> <span class="hljs-attr">spin</span> /&gt;</span><br>  <span class="hljs-tag">&lt;/<span class="hljs-name">Space</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript"><br><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Heart</span>, <span class="hljs-title class_">House</span>, <span class="hljs-title class_">Loading</span>, <span class="hljs-title class_">LogoKui</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;kui-icons&quot;</span>;<br></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></template>
    <template #description>
      <p>You can set the icon's type, size, and color via the <code>type</code>, <code>size</code>, and <code>color</code> attributes, respectively. You can also use the <code>spin</code> attribute to achieve a rotating animation effect.</p>
    </template>
</Demo>


<Demo id="k-29abcaf7" direction="horizontal">
    <template #title>Stroke Width</template>
    <template #component><KuiDemo1 /></template>
    <template #code><pre><code class="hljs language-js"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span><br>  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;ChevronDoubleForward&quot;</span> <span class="hljs-attr">:strokeWidth</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;ChevronDoubleForward&quot;</span> /&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;ChevronDoubleForward&quot;</span> <span class="hljs-attr">:strokeWidth</span>=<span class="hljs-string">&quot;80&quot;</span> /&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;ChevronForward&quot;</span> <span class="hljs-attr">:strokeWidth</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;ChevronForward&quot;</span> /&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;ChevronForward&quot;</span> <span class="hljs-attr">:strokeWidth</span>=<span class="hljs-string">&quot;80&quot;</span> /&gt;</span><br>  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript"><br><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChevronForward</span>, <span class="hljs-title class_">ChevronDoubleForward</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;kui-icons&quot;</span>;<br></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></template>
    <template #description>
      <p>You can set the icon's stroke width via the <code>strokeWidth</code> attribute.</p>
    </template>
</Demo>

## API

| Property    | Description                                   | Type           | Default |
| ----------- | --------------------------------------------- | -------------- | ------- |
| type        | Icon type. Follows the icon naming convention | Array          | -       |
| size        | The size of the icon, unit is px              | String, Number | -       |
| color       | The color of the icon                         | String         | -       |
| spin        | Whether to have rotation animation            | Boolean        | false   |
| strokeWidth | The line thickness of the icon                | Number         | false   |
