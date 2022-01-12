module.exports = {
  presets: [
    [
      "@babel/preset-env",
      // {
      //   "targets": {
      //     "esmodules": true,
      //     "chrome": "58",
      //     "ie": "11"
      //   }
      // }
    ]
  ],
  plugins: [
    "lodash",
    "@babel/plugin-syntax-dynamic-import",
    "transform-vue-jsx",
  ]
}