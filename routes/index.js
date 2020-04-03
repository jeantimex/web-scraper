const express = require('express');
const router = express.Router();
const {fetchData} = require('../scraper');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const $ = await fetchData();
  res.render('index', {title: 'Express'});
});

module.exports = router;
