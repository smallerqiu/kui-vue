let code = {}
code.install = `npm i kui-loader --save-dev`
code.webconfig = `module: {
    rules: [
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader',
              options: { }
            },
            {
              loader: 'kui-loader',
              options: { prefix: false }
            }
          ]
        }
    ]
}`

export default code