import fs from "node:fs";
import path from "node:path";
import process from "node:process";

// `color-mix()` mixes when the browser paints, and the Windows 7 Electron build ships a Chromium older
// than the Chrome 111 that introduced it: a shade written with that function simply does not appear
// there. Every shade has to be a literal in the compiled sheet, which LESS can produce (`mix()`,
// `fade()`) because it knows both colours at build time.
//
// This check is a ratchet, because the calls cannot all move in one commit. The table records how
// many a file still has, and a file may only go down: a count above its entry fails, an entry above its
// count fails too (the budget has to be cut in the same commit that cut the calls), and a file that
// reaches zero leaves the table. An unlisted file has no allowance at all.
//
// Once the table is empty the check renders the library sheet and fails on any call left in it, so a
// shade cannot come back through a shared mixin where the source scan would miss it.
export const MIX_BUDGET: Record<string, number> = {
  "components/alert/styles/index.less": 1,
  "components/calendar/styles/index.less": 1,
  "components/card/styles/index.less": 2,
  "components/check-card/styles/index.less": 3,
  "components/collapse/styles/index.less": 2,
  "components/feature-card/styles/index.less": 3,
  "components/feedback-panel/styles/index.less": 4,
  "components/image/styles/index.less": 1,
  "components/kanban/styles/index.less": 3,
  "components/list-panel/styles/index.less": 2,
  "components/page/styles/index.less": 1,
  "components/result/styles/index.less": 1,
  "components/stat-card/styles/index.less": 1,
  "components/transfer/styles/index.less": 7,
  "src/assets/css/home.less": 4,
};

export interface ColourMixReport {
  /** LESS files read, in the library and in the site stylesheet. */
  scanned: number;
  /** Call sites still standing. */
  remaining: number;
  /** A file with more calls than its entry, or a call in a file the table does not know. */
  grew: string[];
  /** A file whose entry is larger than its remaining calls. */
  canTighten: string[];
  /** A file that has no calls left and should leave the table. */
  stale: string[];
}

const isLess = (file: string) => file.endsWith(".less");

const lessFiles = (root: string) => {
  const found: string[] = [];
  const walk = (directory: string) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (["node_modules", "dist", "style", "docs", "coverage"].includes(entry.name)) continue;
        walk(path.join(directory, entry.name));
      } else if (isLess(entry.name)) found.push(path.join(directory, entry.name));
    }
  };
  for (const directory of ["components", "src"]) {
    const base = path.join(root, directory);
    if (fs.existsSync(base)) walk(base);
  }
  return found.sort();
};

// A file that explains why the function is banned has to name it, so the ledger counts a file's call
// sites after its comments go — `//` to end of line and `/* */`, neither of which reaches the sheet.
// Quotes are tracked because `url("http://…")` puts two slashes inside a value that does reach it.
export function stripComments(source: string): string {
  let out = "";
  let quote = "";
  let inBlock = false;
  for (let i = 0; i < source.length; i += 1) {
    const char = source[i]!;
    const next = source[i + 1];
    if (inBlock) {
      if (char === "*" && next === "/") {
        inBlock = false;
        i += 1;
        out += "  ";
      } else out += char === "\n" ? "\n" : " ";
      continue;
    }
    if (quote) {
      out += char;
      if (char === "\\" && next !== undefined) {
        out += next;
        i += 1;
      } else if (char === quote) quote = "";
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      out += char;
      continue;
    }
    if (char === "/" && next === "*") {
      inBlock = true;
      i += 1;
      out += "  ";
      continue;
    }
    if (char === "/" && next === "/") {
      while (i < source.length && source[i] !== "\n") i += 1;
      out += "\n";
      continue;
    }
    out += char;
  }
  return out;
}

const countCalls = (source: string) => (stripComments(source).match(/color-mix\(/g) ?? []).length;

export function countColourMix(root: string): ColourMixReport {
  const report: ColourMixReport = {
    scanned: 0,
    remaining: 0,
    grew: [],
    canTighten: [],
    stale: [],
  };

  const seen = new Set<string>();
  for (const file of lessFiles(root)) {
    const relative = path.relative(root, file).split(path.sep).join("/");
    const calls = countCalls(fs.readFileSync(file, "utf8"));
    report.scanned += 1;
    report.remaining += calls;
    if (!(relative in MIX_BUDGET)) {
      if (calls > 0)
        report.grew.push(`${relative}: 新增 ${calls} 处（表里没有这个文件，允许的数是 0）`);
      continue;
    }
    seen.add(relative);
    const allowed = MIX_BUDGET[relative]!;
    if (calls > allowed) report.grew.push(`${relative}: ${calls} 处，超出门槛 ${allowed} 处`);
    else if (calls === 0) report.stale.push(`${relative}: 已经清零，把这条从表里删掉`);
    else if (calls < allowed)
      report.canTighten.push(`${relative}: 还剩 ${calls} 处，门槛还写着 ${allowed}，一并下调`);
  }

  for (const relative of Object.keys(MIX_BUDGET)) {
    if (!seen.has(relative))
      report.stale.push(`${relative}: 文件已不在这两棵树下，把这条从表里删掉`);
  }
  return report;
}

// The sheet is what ships, and a shared mixin can add a shade that the per-file ledger above cannot
// attribute to any one file. Its count is read on every run so that this half of the check stays
// exercised while the migration is still going on, not only once the ledger empties.
export async function countSheetColourMix(root: string): Promise<number> {
  const less = (await import("less")).default;
  const filename = path.join(root, "components/styles/index.less");
  const css = (
    await less.render(fs.readFileSync(filename, "utf8"), { filename, javascriptEnabled: true })
  ).css;
  return countCalls(css);
}

const failures = (report: ColourMixReport) => [
  ...report.grew,
  ...report.canTighten,
  ...report.stale,
];

const invoked = process.argv[1] ? path.resolve(process.argv[1]) : "";
if (invoked === import.meta.filename) {
  const root = path.resolve(import.meta.dirname, "..");
  const report = countColourMix(root);
  const lines = failures(report);
  const sheet = await countSheetColourMix(root);
  console.log(
    `color-mix 退场：读了 ${report.scanned} 份 LESS，源码里还剩 ${report.remaining} 处（${Object.keys(MIX_BUDGET).length} 个文件），编译产物里 ${sheet} 处。`,
  );

  if (process.argv.includes("--report")) {
    for (const [relative, allowed] of Object.entries(MIX_BUDGET).sort((a, b) => b[1] - a[1]))
      console.log(`  ${String(allowed).padStart(3)}  ${relative}`);
  } else if (lines.length) {
    for (const line of lines) console.log(`  ! ${line}`);
  }

  // Nothing left to migrate means nothing left, including whatever a mixin contributes.
  if (!Object.keys(MIX_BUDGET).length && sheet) {
    console.log(`  ! 表已清空，编译产物里还剩 ${sheet} 处 color-mix(`);
    lines.push("sheet");
  }

  if (lines.length && !process.argv.includes("--report"))
    console.log(
      "Shades are mixed at build time now: write mix(@a, @b, P%) or fade(@a, P%) in LESS so the value is a literal in the compiled CSS. Pass --report for the remaining ledger.",
    );
  process.exitCode = lines.length ? 1 : 0;
}
