const webpack = require("webpack");
const path = require("path");
// 读取同一目录下的 base config
const config = require("./webpack.base.conf");
config.mode = "development"; //设置为开发环境 ；修改为 production 启用生产环境
config.devServer = {
    open: true, //自动打开浏览器
    port: 3000, //设置端口
    contentBase: "src", //指定托管根目录
    hot: true, //启用热更新
    compress: true,//是否启用gzip压缩
    //--open --port 3000 --contentBase src --hot
};
config.plugins = config.plugins.concat(
    [//配置插件的节点
        new webpack.HotModuleReplacementPlugin(), //new 一个热更新的模块对象 启用热更新
    ]
);
config.module.rules = config.module.rules.concat([
    {
        test: /\.css$/,
        //开发环境不提取css，以便进行热重载。
        use: ["vue-style-loader", "css-loader"]
    },
]);
module.exports = config;
