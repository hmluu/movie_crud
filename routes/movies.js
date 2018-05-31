const express = require('express');
const router = express.Router();
const movies = require('../controllers/movies');

router.get('/', moviesController.index);
router.get('/:id', moviesController.show);
router.get('/', moviesController.create);

module.exports = router;
