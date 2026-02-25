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
