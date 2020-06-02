const router = require('express').Router();
const pagesController = require('../controllers/PagesController');
const mongoose = require('mongoose');
//POR SI FALLA
const Movie = mongoose.model('movies');

router.get('/', pagesController.index);
router.post('/type', pagesController.movieByType);
router.post('/title', pagesController.movieByTitle);
router.post('/director', pagesController.movieByDirector);
router.post('/cast', pagesController.movieByCast);
router.post('/country', pagesController.movieByCountry);
router.post('/year', pagesController.movieByYear);
router.post('/rating', pagesController.movieByRating);
router.post('/duration', pagesController.movieByDuration);
router.post('/genre', pagesController.movieByGenre);
router.post('/description', pagesController.movieByDesc);
router.get('/R-rated', pagesController.moviesRRated);
router.get('/shows', pagesController.tvShows);
router.get('/moreThanOne', pagesController.moreThanOne);
router.get('/releasedYear', pagesController.releaseYear);
router.post('/add-movie', pagesController.addOne);

module.exports = router;
