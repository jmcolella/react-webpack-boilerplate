import Server from './server.js';
const port = ( process.env.PORT || 8080 );
const app = Server.app();

if ( process.env.NODE_ENV !== 'production' ) {
  const webpack = require( 'webpack' );
  const webpackDevMiddleware = require( 'webpack-dev-middleware' );
  const webpackHotMiddleware = require( 'webpack-hot-middleware' );
  import config from '../webpack.config.js';
  const compiler = webpack( config );

  app.use( webpackHotMiddleware( compiler ) );
  app.use( webpackDevMiddleware( compiler, {
    noInfo: ture,
    publicPath: config.output.path
  }))
}

app.listen( port );
console.log( 'App listening on localhost:${ port }' );
