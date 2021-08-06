module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "targets": {
          "esmodules": true,
          "chrome": "50",
          "ie": "9"
        }
      }
    ]
  ],
  plugins: [
    "lodash",
    "@babel/plugin-syntax-dynamic-import",
    "transform-vue-jsx",
  ]
}