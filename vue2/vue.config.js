const webpack = require("webpack");
const {name} = require("./package.json");
module.exports = {
  // publicPath: "./", //基本路径
  // outputDir: "dist", //构建时的输出目录
  // assetsDir: "h5", //放置静态资源的目录
  // indexPath: "index.html", //html 的输出路径
  devServer:{
    port: 3002
  },
  // 自定义webpack
  configureWebpack: {
   output: {
    library: 'vue2',
    filename: 'vue2.js',
    libraryTarget: 'umd',// 把微应用打包成 umd 库格式
    jsonpFunction: `webpackJsonp_${name}`,
   }
  },
};
