const express = require( "express" );

const newsRouter = require( "../router/news" );

const app = express();
app.use( express.static( "public" ) );
app.use( express.static( "data/uploads" ) );
app.use( "/api", newsRouter );

app.listen( 3000, () => {
	console.log( "Server is open" );
} );
// npm run dev
// tsc --init para usar import from ... em vez de require
