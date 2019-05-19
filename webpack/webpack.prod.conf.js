const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = require("./webpack.base.conf");
config.mode = "production"; // production 启用生产环境
// 真实场景中，Vue 等优先走全站的 CDN，所以要放在 externals 中
config.externals = {
    // vue: "Vue",
    // vuex: "Vuex",
    // "vue-router": "VueRouter",
};
config.module.rules = config.module.rules.concat([
    {
        test: /\.css$/,
        //只在生产环境下使用 CSS 提取
        use: [MiniCssExtractPlugin.loader, "css-loader"]
    },
]);
config.plugins = config.plugins.concat([

    // 官方文档推荐使用下面的插件确保 NODE_ENV
    new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production")
    }),
    // 启动 minify
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    new CleanWebpackPlugin(["dist"]),
    new UglifyJSPlugin({//压缩JS
        exclude: /\.min\.js$/, // 过滤掉以".min.js"结尾的文件，我们认为这个后缀本身就是已经压缩好的代码，没必要进行二次压缩
        cache: true,
        parallel: true, // 开启并行压缩，充分利用cpu
        sourceMap: false,
        extractComments: false, // 移除注释
        uglifyOptions: {
            compress: {
                //warnings: false,
                drop_debugger: true,//移除debug
                drop_console: true,//移除console
            },
            output: {
                comments: false,// 移除注释
            }
        }
    }),
    new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessorOptions: {
            safe: true,
            autoprefixer: { disable: true }, // 禁用掉cssnano对于浏览器前缀的处理。
            mergeLonghand: false,
            discardComments: {
                removeAll: true // 移除注释
            }
        },
        canPrint: true
    }),
    new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    // split vendor js into its own file
]);
config.optimization = {
    splitChunks: {
        cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendors",
                minSize: 30000,
                minChunks: 1,
                chunks: "initial",
                priority: 1 // 该配置项是设置处理的优先级，数值越大越优先处理
            },
            commons: {
                test: /[\\/]src[\\/]common[\\/]/,
                name: "commons",
                minSize: 30000,
                minChunks: 3,
                chunks: "initial",
                priority: -1,
                reuseExistingChunk: true // 这个配置允许我们使用已经存在的代码块
            }
        }
    }

};
module.exports = config;
