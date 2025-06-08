const express = require('express');
const router = express.Router();
const { getSeats, bookSeats } = require('../controllers/screenController');

router.get('/:screenId/seats', getSeats);
router.post('/:screenId/book', bookSeats);

module.exports = router;
