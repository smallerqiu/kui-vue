## Usage

```js
<template>
  <div>
    <Icon :type="Heart" />
  </div>
</template>
<script setup>
import { Heart } from 'kui-icons'
</script>
```

Starting from version 3.3, using Icon requires separate importing and on-demand loading to reduce the compiled size.

After version 3.1.1, use version 5.5 of the `ionicons` icon library.

## Use Sprite mode

```js
import sprite from "kui-icons/dist/sprite.svg";

<svg width="1em" height="1em">
  <use xlink:href={`${sprite}#LogoKui`}></use>
</svg>;
```

## Examples
