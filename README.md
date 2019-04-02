# webpack 4.29.6 + vue/cli 3.5.3
## PS:主要涉及 webpack.config.js 和 package.json 两个文件。
## PS:脚手架支持jsx语法，不需要单独配置！！！
## 依次安装的插件
```
npm i webpack vue-loader
npm i acorn
npm install  webpack-cli
npm i css-loader  
npm i style-loader
npm i url-lodaer file-loader  
npm i stylus-loader stylus
npm i webpack-dev-server
npm i cross-env
npm i html-webpack-plugin

// 优化CSS
npm i postcss-loader autoprefixer babel-loader babel-core   
npm i babel-preset-env babel-plugin-transform-vue-jsx
npm i babel-helper-vue-jsx-merge-props
npm i babel-plugin-syntax-jsx

// 提取css文件  webpack3.X
npm i extract-text-webpack-plugin
// 如果webpack版本过高，执行安装最新版本的extract-text-webpack-plugin
npm i  extract-text-webpack-plugin@next
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```



### Customize configuration
See [webpack4.x-extends](https://cli.vuejs.org/config/).
