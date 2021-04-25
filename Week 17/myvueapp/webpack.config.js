  
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ]
      },
      {
    test: /\.js$/,
        use: {
            loader: 'babel-loader'
        },
            exclude: '/node_modules/'
        }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'src/*.html', to: '[name].[ext]' },
      ]
    })
  ]
}