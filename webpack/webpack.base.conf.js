//const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: path.join(__dirname, "../src/main.js"), //入口文件
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, "../dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            //创建一个在内存中生成HTML页面的插件
            template: path.join(__dirname, "../src/index.html"), //指定模板页面，会根据指定的模板页面来生成内存中的页面
            filename: "index.html", //指定输出文件的名称,
            //favicon: "./src/assets/img/favicon.ico",//图标文件
            minify: {  // 压缩html
                collapseWhitespace: true,  // 空格
                removeComments: true,//删除注释
            }
        }),
        new VueLoaderPlugin(), //添加 Vue Loader 的插件
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        })
    ],
    module: {
        // 配置所有第三方loader 模块
        rules: [
            // 第三方模块的匹配规则
            {
                test: /\.(jpg|png|jpeg|gif|bmp)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: "img/[name]-[hash:8].[ext]"
                    }
                }]
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                // 处理 字体文件的 loader
                use: "url-loader"
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "media/[name]-[hash:8].[ext]"
                }
            },
            // 处理html中路径
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src"]
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                use: "babel-loader", // 配置 Babel 来转换高级的ES
                exclude: /node_modules/, //排除 node_modules 目录
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            }
        ]
    },
    optimization: {},
    resolve: {
        //路径别名
        alias: {
            vue$: "vue/dist/vue.esm.js",
            "@": path.resolve(__dirname, "./src"),
        },
        //路径别名自动解析确定的扩展
        extensions: [".js", ".vue", ".json"]
    },


};
//关于webpack的配置文件名，还可以用webpack.base.conf.js/webpack.dev.conf.js/webpack.prod.conf.js
