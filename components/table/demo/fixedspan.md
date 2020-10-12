<cn>
#### 表头分组 
columns[n] 可以内嵌 children，以渲染分组表头。
</cn>

```vue
<template>
  <Table :data="data" :columns="columns" bordered :height="300" :width="1800" @change="change">
      <a slot="action">action</a>
  </Table>
</template>
<script>
export default{
  data(){
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        key: i,
        name: 'John Brown',
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M',
      });
    }
    return{
      data,
      columns:[
        {
          title: 'Name',
          key: 'name',
          width: 100,
          fixed: 'left',
        },
        {
          title: 'Other',
          children: [
            {
              title: 'Age',
              key: 'age',
              width: 200,
              sorter:true,
            },
            {
              title: 'Address',
              children: [
                {
                  title: 'Street',
                  key: 'street',
                  width: 200,
                },
                {
                  title: 'Block',
                  children: [
                    {
                      title: 'Building',
                      key: 'building',
                      width: 100,
                    },
                    {
                      title: 'Door No.',
                      key: 'number',
                      width: 100,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: 'Company',
          children: [
            {
              title: 'Company Address',
              key: 'companyAddress',
              width: 200,
            },
            {
              title: 'Company Name',
              key: 'companyName',
            },
          ],
        },
        {
          title: 'Gender',
          key: 'gender',
          width: 80,
          fixed: 'right',
        },
      ]
    }
  },
  methods:{
    change(filters,{ key, order }){
      console.log(filters,key,order)
      this.data.sort((a,b) => {
        return order=='asc'? b[key]-a[key] : a[key]-b[key]
      })
    },
  }
}
</script>
```
