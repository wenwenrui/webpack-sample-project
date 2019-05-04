const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

const APP_PATH = path.resolve(__dirname, 'src')
const BUILD_PATH = path.resolve(__dirname, 'dist')

module.exports = {
  // entry: './src/index.js',
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?reload=true&noINfo=true',
    APP_PATH
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: 'Output hotMiddleware'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: BUILD_PATH,
    publicPath:'/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
}