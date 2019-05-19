var express = require("express");
var app = express();//使用express框架
var path = require("path");//这个是node.js自带的路径处理模块
app.use("/", express.static(path.join(__dirname, "../dist")));//公开dist文件夹
var http = require("http");//导入http模块
let port = 80;//脚本运行端口为80
http.createServer(app).listen(port, () => {
    console.log("HTTP运行端口为 http://127.0.0.1:" + port);
});

