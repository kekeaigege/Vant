const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 当保存时不进行eslint的检查
  css: {
    // loaderOptions: {
    //   less: {
    //     // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
    //     modifyVars: {
    //       // 直接覆盖变量
    //       'nav-bar-background-color': 'red',
    //     },
    //   },

    // },
  },

})