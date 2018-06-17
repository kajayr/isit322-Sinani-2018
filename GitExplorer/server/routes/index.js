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

router.get('/gist', function(request, response, next) {
    requester('http://localhost:30028/').pipe(response);
});

router.get('/gist/you-rang', function(request, response, next) {
    requester('http://localhost:30028/you-rang').pipe(response);
});

router.get('/gist/gist-test', function(request, response, next) {
    requester('http://localhost:30028/gist-test').pipe(response);
});

router.get('/gist/get-gist-list', function(request, response, next) {
    requester('http://localhost:30028/get-gist-list').pipe(response);
});

router.get('/gist/delete', function(request, response, next) {
    requester('http://localhost:30028/delete?gistId=' + request.query.gistId).pipe(response);
});



module.exports = router;
