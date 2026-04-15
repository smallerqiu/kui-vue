# Dark Mode

Version 3.2.5+ has redesigned both Light Mode and Dark Mode, making it easier to switch between them, and supports using Dark Mode in specific areas.

## Usage

Starting from version 3.2.5, the dark mode toggle is achieved by adding the attribute [theme-mode='dark'] to the root element node. Here's an example:

```js
const body = document.documentElement;
if (body.hasAttribute("theme-mode")) {
  body.removeAttribute("theme-mode");
} else {
  body.setAttribute("theme-mode", "dark");
}
```

## Example

[Switch Theme](./demo.vue)

-A simple toggle example, ready to use out of the box

## Theme follows system

The system theme in macOS can be configured via System Preferences -> General -> Appearance.

In browsers (Chrome >= 76, Safari >= 12.1), it can be set using media queries.

```css
.day {
  background: #eee;
  color: black;
}
.night {
  background: #333;
  color: white;
}

@media (prefers-color-scheme: dark) {
  .day.dark-scheme {
    background: #333;
    color: white;
  }
  .night.dark-scheme {
    background: black;
    color: #ddd;
  }
}

@media (prefers-color-scheme: light) {
  .day.light-scheme {
    background: white;
    color: #555;
  }
  .night.light-scheme {
    background: #eee;
    color: black;
  }
}
```

Of course, you can also listen via JS.

```js
const monitor = window.matchMedia("(prefers-color-scheme: dark)");

function matchMode(e) {
  const body = document.documentElement;
  if (e.matches) {
    if (!body.hasAttribute("theme-mode")) {
      body.setAttribute("theme-mode", "dark");
    }
  } else {
    if (body.hasAttribute("theme-mode")) {
      body.removeAttribute("theme-mode");
    }
  }
}

// monitor.addListener(matchMode); //old api has been deprecated
monitor.addEventListener("change", matchMode);
```

## Local Mode

Add the 'theme-mode=dark' or 'theme-mode=light' attribute to the top-level element, and the components under this element will use the corresponding mode's color variables.

> Note: Local dark/light mode does not apply to pop-up layers.

[Local darkening](./local.md?show=vertical)

- Control local dark mode by setting the `theme-mode` attribute of the top-level element
