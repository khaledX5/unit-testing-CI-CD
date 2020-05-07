var express = require('express');
var router = express.Router();
var square_controller = require('../controllers/squareController');

/* GET home page. */
router.get('/area', square_controller.getArea);

module.exports = router;
