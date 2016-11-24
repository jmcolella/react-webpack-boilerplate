import HtmlWebpackPlugin from 'html-webpack-plugin';
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

const config = {
  entry: [
    './app/public/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.css$/, loaders: [ 'style', 'css', 'sass' ] }
    ]
  },
  plugins: [ HtmlWebpackPluginConfig ]
};

export default config;
