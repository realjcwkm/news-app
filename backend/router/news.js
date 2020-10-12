const express = require( "express" );
const multer = require( "multer" );

const News = require( "../src/news" );
const imageProcess = require( "../utils/imageProcess" );
const router = express.Router();

const storage = multer.memoryStorage();
const uploads = multer( { storage } );

router.post( "/create", uploads.single( "thumbnail" ), async ( req, res ) => {
  const news = new News();
  const id = news.createId();

  const imageName = await imageProcess( req, id );
  news.create( req.body, id, imageName );

  res.send( "submit" );
} );

module.exports = router;