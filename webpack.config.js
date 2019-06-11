const path = require('path');

module.exports = {
  // entry 入口
  entry: './src/index.js',
  // output 输出结果
  output: {
    publicPath: __dirname + "dist",
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[hash].js"
  },
  // module 模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块
  module: {},
  // loader 模块转换器，用于把模块原内容按照需求转换成新内容
  loader: {

  },
  // plugins 扩展插件，在 Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情
  plugins: [],
  // chunk 一个 Chunk 由多个模块组合而成，用于代码合并与分割
  // chunk: '',
  // 开发服务器设置
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), // 静态文件根目录
    port: 8888,
    host: 'localhost',
    overlay: true,
    compress: true // 服务器返回浏览器的时候，是否启动 gzip 压缩
  }
};
