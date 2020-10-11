const fs = require( "fs" );

class News {
    constructor( filename = "news.json" ) {
        this.path = `./data/${filename}`;
        try {
            fs.readdirSync( "data" );
        } catch ( error ) {
            fs.mkdirSync( "data" );
        }
        try {
            fs.accessSync( this.path );
        } catch ( error ) {
            fs.writeFileSync( this.path, "[]" );
        }
    }
}

module.exports = News;