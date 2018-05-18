var express = require('express');
var router = express.Router();
var requester = require('request');
/* Set up a route called foo. */
router.get('/foo', function (request, response) {
    var message = {'result': 'success', 'status': 'bar', 'file': 'api.js'};
    console.log('Foo called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});
router.get('/user', function(req, response, next) {
    const options = {
        url: 'https://api.github.com/users/kajayr',
        headers: {
            'User-Agent': 'request'
        }
    };

    requester('https://api.github.com/users/kajayr', options).pipe(response);

});
module.exports = router;