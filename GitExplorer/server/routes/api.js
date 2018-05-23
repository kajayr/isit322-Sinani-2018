var express = require('express');
var router = express.Router();
//var requester = require('request');
var request = require('request');

/* Set up a route called foo. */
router.get('/foo', function (request, response) {
    var message = {'result': 'success', 'status': 'bar', 'file': 'api.js'};
    console.log('Foo called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/user', function(req, res, next) {
    const options = {
        url: 'https://api.github.com/users/kajayr',
        headers: {
            'User-Agent': 'request'
        }
    };
    request(options, function(error, response, body) {
        // Print the error if one occurred
        console.log('error:', error);
        // Print the response status code if a response was received
        console.log('statusCode:', response && response.statusCode);
        // Print the HTML for the Google homepage.
        console.log('body:', body);
        res.send({error: error, response: response, body: body});
    });

    //request('https://api.github.com/users/kajayr', options).pipe(response);

});

module.exports = router;