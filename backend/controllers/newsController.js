const News = require( "../src/news" );
const imageProcess = require( "../utils/imageProcess" );

const news = new News();

const createNews = async ( req, res ) => {
  const id = news.createId();

  try {
    const imageName = await imageProcess( req, id );
    news.create( req.body, id, imageName );
    res.json( { success: true, message: "Post created successfully." } );
  } catch ( error ) {
    res.json( { success: false, message: "Something gone wrong, server error at createNews()." } );
    console.log( "Error while creating news: ", error );
  }

};

const getAllNews = async ( req, res ) => {
  try {
    const data = await news.getAll();
    res.json( { success: true, news: data } );
  } catch ( error ) {
    res.json( { success: false, message: "Something gone wrong, server error at getAllNews()." } );
    console.log( "Error while getting all news: ", error );
  }
}

const getSingleNews = async ( req, res ) => {
  try {
    const data = await news.getSingle( req.params.id );
    if ( !data ) {
      res.json( { success: false, message: "Post not found!" } );
    }
    res.json( { success: true, news: data } );
  } catch ( error ) {
    res.json( { success: false, message: "Something gone wrong, server error at getSingleNews()." } );
    console.log( "Error while getting single news: ", error );
  }
}

const getNewsByCategory = async ( req, res ) => {
  try {
    const data = await news.getByCategory( req.params.category );
    if ( data.length === 0 ) {
      res.json( { success: false, message: "No have post in this category!" } );
    }
    res.json( { success: true, news: data } );
  } catch ( error ) {
    res.json( { success: false, message: "Something gone wrong, server error at getNewsByCategory()." } );
    console.log( "Error while getting news by category: ", error );
  }
}

module.exports = { createNews, getAllNews, getSingleNews, getNewsByCategory };