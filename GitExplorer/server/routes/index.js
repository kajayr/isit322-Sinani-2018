var express = require('express');
var router = express.Router();
const requester = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {
    'use strict';
    res.render('index', {title: 'server'});
});

router.get('/qux', function(request, response, next) {
    requester('http://localhost:30027/').pipe(response);
});

router.get('/qux/you-rang', function(request, response, next) {
    requester('http://localhost:30027/you-rang').pipe(response);
});


module.exports = router;