const express = require( "express" );
const News = require( "./news" );

const app = express();
app.use( express.static( "public" ) );

new News();


app.listen( 3333, () => {
    console.log( "Server is open" );
} );
// npm run dev
// tsc --init para usar import from ... em vez de require
