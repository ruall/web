/**
 * 1、该文件是webpack的配置文件，所有webpack的任务、用到的loader、plugins都要配置在这里
 * 2、该文件要符合CJS模块化规范
 * */

//引入Node中一个内置的path模块，专门用于解决路径问题
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path')
//css相关loader配置
const baseCssLoader = ['style-loader', 'css-loader']

//使用CJS的模块化规范，暴露一个对象，该对象就是webpack的详细配置对象（规则）
module.exports = {
    mode: 'development', //工作模式
    entry: './src/js/app.js', //入口文件
    output: { //出口/输出
        path: resolve(__dirname, 'build'), //输出文件的路径
        filename: 'js/app.js' //输出文件的名字
    },
    //module.rules 中配置loader
    module: {
        rules: [
            {
                test: /\.css$/, //匹配文件
                use: [...baseCssLoader]
            },
            {
                test: /\.less$/,
                use: [...baseCssLoader, 'less-loader']
            },
            //配置解析样式中的图片
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            outputPath: 'imgs', //配置图片加工后存放的位置
                            name: '[hash:5].[ext]', //配置生成图片的名字+后缀
                            limit: 8 * 1024, //图片大小，小于8K时，将图片转为base64编码
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html' //模板的位置
    })]
};