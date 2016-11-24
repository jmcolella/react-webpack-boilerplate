const path = require( 'path' );
const express = require( 'express' );

module.exports = {
  app: () => {
    const app = express()
    const indexPath = path.json( __dirname, '/app/public/index.html' )
    const publicPath = express.static( path.join( __dirname, '../dist' ) )

    app.use( '/dist', publicPath )
    app.get( '/', ( _, res ) => { res.sendFilde( indexPath ) } )

    return app
    
  }
}
