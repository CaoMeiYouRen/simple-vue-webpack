module.exports = {
    root: true,
    env: {//运行环境
        browser: true,
        es6: true,
        commonjs: true,
        node: true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    globals: {//处理全局变量
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        window: true
    },
    parserOptions: {//JS标准
        ecmaVersion: new Date().getFullYear() - 1,//指定最新的标准，为当前年份
        sourceType: "module"
    },
    plugins: [//插件
        "vue",
        "html"
    ],
    rules: {
        indent: [//强制使用一致的缩进
            "error",
            4, {
                SwitchCase: 1, //case 子句将相对于 switch 语句缩进 4 个空格，即一个tab
            }
        ],
        "linebreak-style": [//强制使用一致的换行风格
            "error",
            "windows"
        ],
        quotes: [//强制使用一致的反勾号、双引号或单引号
            "error",
            "double"
        ],
        semi: [//要求或禁止使用分号代替 ASI
            "error",
            "always"
        ],
        "prefer-arrow-callback": [//要求回调函数使用箭头函数
            "error"
        ],
        // "no-param-reassign": [
        //     "error", { "props": false }//禁止对 function 的参数进行重新赋值
        // ],
        "no-shadow": "error",//禁止变量声明与外层作用域的变量同名
        "no-unused-vars": 0,//禁止出现未使用过的变量
        "no-console": 0, //禁止console
        "object-shorthand": 2,//要求或禁止对象字面量中方法和属性使用简写语法
        "sort-imports": 0, //强制模块内的 import 排序
        "quote-props": [2, "as-needed", { keywords: false, numbers: true }],//要求对象字面量属性名称使用引号。
        "space-before-blocks": 0,
        "padding-line-between-statements": [//要求或禁止在语句间填充空行
            "error",
            { blankLine: "never", prev: "*", next: "*" },//禁止任何语句前后出现空行
            { blankLine: "always", prev: "directive", next: "*" },
            { blankLine: "any", prev: "directive", next: "directive" },//要求指令序言后出现空行。它匹配指令，如 "use strict"。
            { blankLine: "always", prev: "*", next: "import" },//要求 import 语句前出现空行
            { blankLine: "any", prev: "import", next: "*" },//要求 import 语句后出现空行
            { blankLine: "always", prev: "*", next: "function" },
            { blankLine: "always", prev: "*", next: "export" },
        ],

    }
};
