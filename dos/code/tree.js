let code ={}

code.base =`<Tree :data="data"></Tree>
<script>
export default {
  data() {
    return {
      data: [
        {
          title: 'tree 1',
          expand: true,
          children: [
            {
              title: 'tree 1-1',
              expand: true,
              children: [
                { title: 'leaf 1-1-1' },
                { title: 'leaf 1-1-2' }
              ]
            },
            {
              title: 'tree 1-2',
              expand: true,
              children: [
                { title: 'leaf 1-2-1' },
                { title: 'leaf 1-2-2' }
              ]
            }
          ]
        }
      ],
    }
  },
}
</script>
`

code.checked=`<Tree :data="data" checkbox></Tree>
<script>
export default {
  data() {
    return {
      data: [
        {
          title: 'tree 1',
          expand: true,
          children: [
            {
              title: 'tree 1-1',
              expand: true,
              children: [
                { title: 'leaf 1-1-1' },
                { title: 'leaf 1-1-2' }
              ]
            },
            {
              title: 'tree 1-2',
              expand: true,
              children: [
                { title: 'leaf 1-2-1' },
                { title: 'leaf 1-2-2' }
              ]
            }
          ]
        }
      ],
    }
  },
}
</script>
`

code.async=`<Tree :data="data" @loadData="loadData"></Tree>
<script>
export default {
  data() {
    return {
      data: [{
        title: 'children',
        loading: false,
        children: []
      }],
    }
  },
  methods: {
    loadData(item, callback) {
      //模拟异步请求
      setTimeout(() => {
        let data = [
          {
            title: 'children',
            loading: false,
            children: []
          },
          {
            title: 'children',
            loading: false,
            children: []
          }
        ];
        callback(data);
      }, 1000)
    }
  }
}
</script>
`

code.icon=`<Tree :data="data" checkbox></Tree>
<script>
export default {
  data() {
    return {
      data: [
        {
          title: 'tree 1',
          expand: true,
          icon: 'fireball',
          children: [
            {
              title: 'tree 1-1',
              expand: true,
              icon: 'flag',
              children: [
                { title: 'leaf 1-1-1', icon: 'flame' },
                { title: 'leaf 1-1-2', icon: 'folder' }
              ]
            },
            {
              title: 'tree 1-2',
              expand: true,
              icon: 'flag',
              children: [
                { title: 'leaf 1-2-1', icon: 'folder' },
                { title: 'leaf 1-2-2', icon: 'folder' }
              ]
            }
          ]
        }
      ],
    }
  },
}
</script>`

export default code