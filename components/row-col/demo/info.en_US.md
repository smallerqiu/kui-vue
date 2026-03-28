# Row / Col

Uses a 24-grid system, dividing the area into 24 equal parts, making it easy to handle most layout problems.
Two concepts: row `row` and column `col`. Specific usage is as follows:

- Use `row` to create a row horizontally
- Insert a group of `col` into the `row`
- Type your own content in each `col`
- Specify the span range by setting the `span` parameter of `col`, ranging from 1 to 24
- The sum of `col` in each `row` should be 24

> Note: In non-template/render mode, use k-col.

## Examples
