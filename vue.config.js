// vue.config.js
module.exports = {
    // 选项...
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-todolist/'
    : '/',
    lintOnSave: true, // 是否使用eslint
    devServer: {
        port: 8080,
        host: 'localhost',
        open: true, // 自动启动浏览器
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        },  // 配置多个代理
    }
}