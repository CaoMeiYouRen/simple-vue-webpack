# simple-vue-webpack

#### 一个简单的基于vue框架的webpack风格项目模板

----------

### 声明：[草梅友仁](https://cmyr.ltd)版权所有，盗用必究！

### 作者：草梅友仁

##  使用方法

```bash
npm i #下载依赖
npm run dev  #开发模式
npm run build  #生产模式，生成的文件在dist目录下
npm run server  #启用http服务器，可通过http://127.0.0.1:80 来访问
npm run lint:fix   #使用eslint修正风格
npm run uninstall  #移除所有node_modules
```

### 文件夹说明

- dist    编译后的内容，要发布的内容，将本部分扔到服务器根目录即可
- server    本地调试用的服务器脚本，提供http服务，将dist文件夹作为一个网站根文件夹
- src    具体源代码
- webpack   webpack的相关配置
  -  webpack.base.conf.js    webpack通用配置
  - webpack.dev.conf.js    webpack开发用配置
  - webpack.prod.conf.js    webpack打包用配置

### 根目录文件说明

- .babelrc    babel配置，用于转换es6及以上语法
- .editorconfig    编辑器配置，用于统一缩进和换行符，需要在对于编辑器中安装editorconfig的相关插件，例如在vscode中就是EditorConfig for VS Code。相关包已在package.json中，安装完依赖后就行
- .eslintignore    配置不进行eslint风格检查的文件/文件夹
- .eslintrc.js     eslint风格配置，用于统一代码风格
- .gitignore    配置git不提交的内容
- package.json    npm依赖包
- README.md   本文件，项目介绍文件