// vue.config.js
module.exports = {
  // 选项...
  publicPath: '/',
  lintOnSave: true, // 是否使用eslint
  devServer: {
    open: true, // 自动启动浏览器
    proxy: 'http://localhost:8080'
  },
}
