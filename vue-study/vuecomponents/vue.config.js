module.exports = {
    //禁用eslint
    lintOnSave: false,
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                pathRewrite: {"^/api": ""},
                changeOrigin: true
            }
        }
    }
}