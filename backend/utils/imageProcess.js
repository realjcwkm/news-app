const sharp = require( "sharp" );
const fs = require( "fs" );

const imageProcess = async ( req, id ) => {
  fs.access( "./data/uploads", ( err ) => {
    if ( err ) {
      fs.mkdirSync( "./data/uploads" );
    }
  } );

  const formatedName = req.file.originalname.split( " " ).join( "-" );
  const fileName = `${id}-${req.file.originalname}`;
  try {
    await sharp( req.file.buffer )
      .resize( { width: 615, height: 350 } )
      .toFile( `./data/uploads/${fileName}` );
  } catch ( error ) {
    console.log( "Error while processing image: ", error );
  }
  return fileName;
};

module.exports = imageProcess;