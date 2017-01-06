'user strict'
const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: './src/app.js',
  devtool: "source-map",
  context: __dirname,
  devServer:{
    port: 8080,
    contentBase: "./vue-client",
    inline:true
  },
  output: {
    path: path.resolve(__dirname,"./build"),
    publicPath: '/vue/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|.vue)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  plugins:[
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
}
