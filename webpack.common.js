const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 将来优化成从 entry.js 引入配置
  entry: {
    app: path.join(__dirname, 'src/index')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'assets/[name].[hash:6].js',
    chunkFilename: 'assets/[name].[chunkhash:6].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React App',
      hash: false,
      filename: 'index.html',
      chunks: ['vendor', 'app'],
      template: path.join(__dirname, 'src/template/default.html')
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
}
