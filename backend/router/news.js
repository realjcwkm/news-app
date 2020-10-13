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

router.get( "/news", newsController.getAllNews );
router.get( "/news/single/:id", newsController.getSingleNews );
router.get( "/news/category/:category", newsController.getNewsByCategory );

module.exports = router;