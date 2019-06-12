const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // entry 入口
  entry: './src/index.js',
  // output 输出结果
  output: {
    // publicPath: __dirname + "dist",
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[hash].js"
  },
  // module 模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块
  module: {
    rules: [
      // { test: /\.txt$/, use: 'raw-loader' },
      {
        test: /\.jsx?/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: 'babel-loader',
        // options: {
        //   // @remove-on-eject-begin
        //   babelrc: false,
        //   presets: [require.resolve('babel-preset-react-app')],
        // }
      }

    ]
  },
  // loader 用于转换某些类型的模块
  loader: {

  },
  // plugins 用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // 配置输出文件名和路径
      template: 'public/index.html',
    }),
  ],
  // chunk 一个 Chunk 由多个模块组合而成，用于代码合并与分割
  // chunk: '',
  // 开发服务器设置
  devServer: {
    contentBase: [path.resolve(__dirname, 'public'), path.resolve(__dirname, 'src')], // 静态文件根目录
    port: 8888,
    host: 'localhost',
    overlay: true,
    compress: true // 服务器返回浏览器的时候，是否启动 gzip 压缩
  }
};
