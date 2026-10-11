import { describe, expect, it } from "vitest";
import { getRecordValue } from "../components/table/utils";

/**
 * 列 `key`、`rowKey`、`childrenColumnName` 共用的取值器。
 * kui-react 与 kui-vue 的这份用例逐字节相同（`components/table/utils.ts` 里的 `getRecordValue`
 * 也是逐字节相同的共享块），所以这里锁定的是跨框架契约，改任何一条规则都要两个仓库一起改。
 */
describe("getRecordValue", () => {
  it("prefers a whole key that exists on the record", () => {
    expect(getRecordValue({ "a.b": "literal" }, "a.b")).toBe("literal");
    // 整名存在（哪怕值是 undefined）时不再按路径下钻，字段名自带点号才不会被迫改列名
    expect(getRecordValue({ "a.b": undefined, a: { b: "from path" } }, "a.b")).toBeUndefined();
  });

  it("walks dotted paths and stops on any missing or non-object link", () => {
    const record = { user: { name: "Ann" }, tags: ["x", "y"], empty: null };

    expect(getRecordValue(record, "user.name")).toBe("Ann");
    expect(getRecordValue(record, "tags.1")).toBe("y");
    expect(getRecordValue(record, "user.name.first")).toBeUndefined();
    expect(getRecordValue(record, "empty.name")).toBeUndefined();
    expect(getRecordValue(record, "missing.name")).toBeUndefined();
    expect(getRecordValue(record, "plain")).toBeUndefined();
  });

  it("never reaches the prototype chain through a column key", () => {
    expect(getRecordValue({}, "__proto__.toString")).toBeUndefined();
    expect(getRecordValue({}, "constructor.name")).toBeUndefined();
    expect(getRecordValue({}, "prototype.name")).toBeUndefined();
    // 不带点号的原生方法名仍按整名读取，保持 `record[key]` 一贯的行为
    expect(typeof getRecordValue({}, "toString")).toBe("function");
  });
});
