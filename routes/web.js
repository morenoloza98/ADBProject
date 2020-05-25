const router = require('express').Router();
const pagesController = require('../controllers/PagesController');

router.get('/', pagesController.index);
router.get('/test', pagesController.test);

module.exports = router;
