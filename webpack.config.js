var webpack = require('webpack');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './app/public/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.js$/,  exclude: /node_modules/, loader: "eslint-loader" }
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'react-hot' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: [ 'react', 'es2015' ] } },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'sass' ] }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
};
