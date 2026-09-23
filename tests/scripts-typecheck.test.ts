// @vitest-environment node
import path from "node:path";
import ts from "typescript";
import { expect, it } from "vitest";

it("typechecks Node tooling without generated package artifacts", () => {
  const root = path.resolve(import.meta.dirname, "..");
  const configPath = path.join(root, "tsconfig.node.json");
  const config = ts.readConfigFile(configPath, ts.sys.readFile);
  expect(config.error).toBeUndefined();
  const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, root);
  expect(parsed.errors).toEqual([]);
  const options = { ...parsed.options, incremental: false, noEmit: true };
  const host = ts.createCompilerHost(options);
  const artifactRoots = ["es", "lib", "types", "dist"].map((folder) => path.join(root, folder));
  const isArtifact = (file: string) =>
    artifactRoots.some((directory) => file === directory || file.startsWith(directory + path.sep));
  const fileExists = host.fileExists.bind(host);
  const readFile = host.readFile.bind(host);
  const directoryExists = host.directoryExists?.bind(host);
  host.fileExists = (file) => !isArtifact(file) && fileExists(file);
  host.readFile = (file) => (isArtifact(file) ? undefined : readFile(file));
  host.directoryExists = (directory) =>
    !isArtifact(directory) && Boolean(directoryExists?.(directory));
  const program = ts.createProgram(parsed.fileNames, options, host);
  const diagnostics = ts.getPreEmitDiagnostics(program);
  expect(
    ts.formatDiagnosticsWithColorAndContext(diagnostics, {
      getCurrentDirectory: () => root,
      getCanonicalFileName: (file) => file,
      getNewLine: () => "\n",
    }),
  ).toBe("");
}, 30_000);
