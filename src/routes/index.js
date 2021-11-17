var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main', { title: 'Express' });
});

router.get('/reviews', function(req, res, next) {
  res.render('reviews', { title: 'Express' });
});

router.get('/announce', function(req, res, next) {
  res.render('announce', { title: 'Express' });
});

module.exports = router;
