# Pagination

Separate long lists using pagination, loading only one page at a time.

## When to Use

- When loading/rendering all data would take a long time.
- When browsing data by switching page numbers.

## Examples

[Basic Usage](./demo/basic.vue?show=vertical)

- Basic pagination.

[Items / Jump](./demo/sizer-elevator.vue?show=vertical)

- Change the number of items displayed per page.

[Size](./demo/size.vue?show=vertical)

- Display small size.

## API

| Property     | Description                                                                     | Type                                 | Default          |
| ------------ | ------------------------------------------------------------------------------- | ------------------------------------ | ---------------- |
| page         | Current page number(v-model)                                                    | number                               | 1                |
| disabled     | Disabled status                                                                 | bool                                 | false            |
| total        | Total data count                                                                | number                               | 0                |
| pageSize     | number of items per page                                                        | number                               | 10               |
| showSizer    | Whether to show page size selector                                              | bool                                 | false            |
| showTotal    | Whether to show total count                                                     | bool                                 | false            |
| showElevator | Whether to show page elevator                                                   | bool                                 | false            |
| sizeData     | Custom page size data                                                           | Array                                | [10,15,20,30,40] |
| size         | When value is 'small', displays small size                                      | string                               | -                |
| theme        | The theme of page                                                               | string                               | fill             |
| onChange     | Callback when page number or page size changes, returns the changed page number | (page:number, pageSize:number)=>void | -                |
