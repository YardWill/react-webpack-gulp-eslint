```
.
├── bower_components: 模块
|   └── ...
├── node_modules: 模块
|   └── ...
├── dist: 打包生成目录
|   ├── css: css目录
|   ├── img: img目录
|   ├── js: js目录
|   └── static: 静态资源
├── src: 开发环境
|   ├── js: js目录
|   |   ├── app: app目录
|   |   ├── components: components目录
|   |   └── utils: utils
|   ├── less: less目录
|   └── config: 配置文件目录
├── package.json: npm 配置文件
├── .eslintrc.js: eslint配置文件
├── bower.json: bower配置文件
├── gulpfile.js: gulp配置文件
└── webpack.config.js: webpack配置文件
```

规范
----
* 统一使用ES6语法，使用webpack打包 [js规范](https://zhuanlan.zhihu.com/p/20616464#!)
* 通过父级组件class定义组件内部css样式 [CSS规范](http://nec.netease.com/standard/css-practice.html)

启动(当前目录下命令行)
----
* npm install
* npm install -g gulp

文件改动监听打包
----
* gulp