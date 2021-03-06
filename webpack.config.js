const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const uglify = require('uglifyjs-webpack-plugin');

const webpack = require('webpack');

let WEBPACK_ENV=process.env.WEBPACK_ENV || 'dev';

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/app.jsx')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath:WEBPACK_ENV=='dev'?'/dist/':'静态域名',   //发布路径
        filename: 'js/[name].js'
    },
    resolve:{   //添加resolve：为了使导入文件不要去理会目录层级
        alias:{
       
        },
        extensions: ['.js', '.jsx','.json'],

    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]' //保持扩展
                        }
                    }
                ]
            }, {
                test: /\.(woff|svg|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new ExtractTextPlugin('css/[name].css'),
        new webpack
            .optimize
            .CommonsChunkPlugin({name: 'common', filename: 'js/base.js'})
    ],
    devServer: {
        port:8087,
        historyApiFallback:{    //当找不到页面时默认打开的页面
            index:'/dist/index.html',
        },
        proxy:{  //******通过代理发出请求解决当前跨域问题****** 
         
        }
    }
}