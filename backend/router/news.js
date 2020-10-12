const express = require( "express" );
const router = express.Router();

const uploads = require( "../middlewares/multer" );
const newsController = require( "../controllers/newsController" );

const { validator, result, validateFile } = require( "../middlewares/validator" );


router.post( "/create",
  uploads.single( "thumbnail" ),
  validator,
  result,
  validateFile,
  newsController.createNews
);

module.exports = router;