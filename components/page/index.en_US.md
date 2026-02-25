## API

| Property      | Description                                                                     | Type                     | Default          |
| ------------- | ------------------------------------------------------------------------------- | ------------------------ | ---------------- |
| current       | Current page number                                                             | Number                   | 1                |
| total         | Total data count                                                                | Number                   | 0                |
| page-size     | Number of items per page                                                        | Number                   | 10               |
| show-sizer    | Whether to show page size selector                                              | Boolean                  | false            |
| show-total    | Whether to show total count                                                     | Boolean                  | false            |
| show-elevator | Whether to show page elevator                                                   | Boolean                  | false            |
| size-data     | Custom page size data                                                           | Array                    | [10,15,20,30,40] |
| size          | When value is 'small', displays small size                                      | String                   | -                |
| theme         | When value is 'light', displays light theme                                     | String                   | -                |
| change        | Callback when page number or page size changes, returns the changed page number | Function(page, pageSize) | -                |
