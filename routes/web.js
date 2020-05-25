const router = require('express').Router();
const pagesController = require('../controllers/PagesController');

router.get('/', pagesController.index);
router.get('/movieTitles', pagesController.movieTitles);

module.exports = router;
