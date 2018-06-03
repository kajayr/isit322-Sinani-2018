var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    'use strict';
    res.render('index', {title: 'server'});
});

router.get('/qux', function(request, response, next) {
    requester('http://localhost:30027/').pipe(response);
});

module.exports = router;
