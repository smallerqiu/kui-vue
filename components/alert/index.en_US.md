## API

| Property    | Description                                                                      | Type         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------------ | ------- |
| type        | Alert type, optional values are `success`, `info`, `warning`, `error` or not set | String       | warning |
| message     | Alert content                                                                    | String，Slot | -       |
| description | Auxiliary text introduction for the alert                                        | String       | -       |
| showIcon    | Whether to show the icon                                                         | Boolean      | false   |
| closable    | Whether to show the close button                                                 | Boolean      | false   |
| bordered    | Whether to display the border                                                    | Boolean      | false   |
| close       | Callback function triggered when closing                                         | Function     | -       |
| icon        | Custom icon                                                                      | Array        | -       |
