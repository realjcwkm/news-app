const { check, validationResult } = require( "express-validator" );

const expectedCategory = [
  "breaking-news",
  "entertainment",
  "political",
  "tech"
];

const validator = [
  check( "title" ).trim().not().isEmpty().withMessage( "Title is required!" ),
  check( "content" ).trim().not().isEmpty().withMessage( "Must have some content!" ),
  check( "category" ).isIn( expectedCategory ).withMessage( "Select at least one category!" )
];

const result = ( req, res, next ) => {
  const result = validationResult( req );
  const hasError = !result.isEmpty();

  if ( hasError ) {
    const error = result.array()[0].msg;
    res.json( { sucess: false, message: error } );
  }
  next();
}

const validateFile = ( req, res, next ) => {
  const expectedFileType = ["jpg", "jpeg", "png"];

  if ( !req.file ) {
    return res.json( { sucess: false, message: "Image is required!" } );
  }

  const fileExtension = req.file.mimetype.split( "/" ).pop();
  if ( !expectedFileType.includes( fileExtension ) ) {
    return res.json( { sucess: false, message: "Image file is not valid!" } );
  }

  next();
}

module.exports = {
  validator,
  result,
  validateFile
}