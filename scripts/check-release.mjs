import assert from "node:assert/strict";
import fs from "node:fs";
import process from "node:process";
const { version } = JSON.parse(fs.readFileSync("package.json", "utf8"));
assert.match(version, /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/);
assert.ok(["next", "latest"].includes(process.env.DIST_TAG || "next"));
if (process.env.PUBLISH === "true") {
  assert.equal(
    process.env.GITHUB_REF_TYPE,
    "tag",
    "Publish by dispatching the workflow on a version tag.",
  );
  assert.equal(process.env.GITHUB_REF_NAME, `v${version}`, "Tag and package version must match.");
  if (process.env.DIST_TAG === "latest")
    assert.ok(!version.includes("-"), "Prereleases must use next.");
  for (const file of ["src/views/change-log.md"]) {
    assert.ok(
      fs.readFileSync(file, "utf8").includes(`## ${version}\n`),
      `${file} needs a version entry.`,
    );
  }
}
console.log(
  `Release checks passed for ${version} (${process.env.PUBLISH === "true" ? "publish" : "dry run"}).`,
);
