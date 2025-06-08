const express = require('express');
const router = express.Router();
const multer = require('multer');
const { getMovies, addMovie } = require('../controllers/movieController');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.get('/', getMovies);
router.post('/', upload.single('poster'), addMovie);

module.exports = router;
const express = require('express');
const router = express.Router();
const { getMovies, addMovie, getMovieScreens } = require('../controllers/movieController');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.get('/', getMovies);
router.post('/', upload.single('poster'), addMovie);
router.get('/:movieId/screens', getMovieScreens); // <-- NEW

module.exports = router;
