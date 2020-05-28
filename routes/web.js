const router = require('express').Router();
const pagesController = require('../controllers/PagesController');
const mongoose = require('mongoose');
//POR SI FALLA
const Movie = mongoose.model('movies');

router.get('/', pagesController.index);
router.get('/movieTitles', pagesController.movieTitles);
router.get('/test', pagesController.test);
router.get('/test1', pagesController.test1);


module.exports = router;
