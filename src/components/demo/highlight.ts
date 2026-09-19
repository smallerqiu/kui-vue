import hljs from "highlight.js/lib/core";
import less from "highlight.js/lib/languages/less";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";

// XML delegates script/style content to JavaScript/CSS. These superset
// grammars also cover TypeScript and Less inside Vue single-file components.
const sfcHighlighter = hljs.newInstance();
sfcHighlighter.registerLanguage("javascript", typescript);
sfcHighlighter.registerLanguage("css", less);
sfcHighlighter.registerLanguage("xml", xml);

export const highlightVueSource = (source: string) =>
  sfcHighlighter.highlight(source, { language: "xml" }).value;
