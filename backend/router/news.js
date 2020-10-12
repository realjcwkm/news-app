const express = require( "express" );
const router = express.Router();

const uploads = require( "../middlewares/multer" );
const newsController = require( "../controllers/newsController" );

router.post( "/create", uploads.single( "thumbnail" ), newsController.createNews );

module.exports = router;