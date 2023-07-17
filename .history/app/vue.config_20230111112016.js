const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    productionSourceMap
    transpileDependencies: true,
    // 关闭 eslint 语法检查
    lintOnSave: false,
    // 代理跨域
    devServer: {
        proxy: {
            '/api': {
                target: 'http://gmall-h5-api.atguigu.cn',
            }
        }
    }
})