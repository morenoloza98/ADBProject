const router = require('express').Router();
const pagesController = require('../controllers/PagesController');
const mongoose = require('mongoose');
//POR SI FALLA
const Movie = mongoose.model('movies');

router.get('/', pagesController.index);
router.get('/type', pagesController.movieByType);
router.get('/title', pagesController.movieByTitle);
router.get('/director', pagesController.movieByDirector);
router.get('/cast', pagesController.movieByCast);
router.get('/country', pagesController.movieByCountry);
router.get('/year', pagesController.movieByYear);
router.get('/rating', pagesController.movieByRating);
router.get('/duration', pagesController.movieByDuration);
router.get('/genre', pagesController.movieByGenre);
router.get('/description', pagesController.movieByDesc);
router.get('/R-rated', pagesController.moviesRRated);
router.get('/shows', pagesController.tvShows);
router.get('/moreThanOne', pagesController.moreThanOne);
router.get('/releasedYear', pagesController.releaseYear);

module.exports = router;
