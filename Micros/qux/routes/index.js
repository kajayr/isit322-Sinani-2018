var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'qux' });
});

router.get('/you-rang', function(request, response, next) { 'use strict';
    response.status(200).json({
        result: 'success',
        message: 'I am qux, up and running'
    });
});

router.get('/:id', function(request, response) {
    response.send({
        'result': 'success from 30026',
        'path': request.params.id
    });
});

module.exports = router;
