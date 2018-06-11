var express = require('express');
var router = express.Router();
var request = require('request');
var GitHub = require('github-api');

let getGitHubx = function() {
    let gh;
    if (true) {
        gh = new GitHub({
            token: '5539bbb05a7616d99130b36e5a3cc83c0ffb0ad4'
        });
    } else {
        gh = new GitHub({
            username: 'Kajayr',
            password: ''
        });
    }
    return gh;
};

router.get('/get-basic-list', function(request, response) {
    let gh = getGitHubx();
    const me = gh.getUser();
    me.listGists().then(({ data }) => {
            const results = data.map(item => ({
                htmlUrl: item.html_url,
                id: item.id,
                gitPullUrl: item.git_pull_url,
                description: item.description,
                ownerLogin: item.owner.login,
                avatarUrl: item.owner.avatar_url,
                files: Object.keys(item.files)
            }));
            response.status(200).send({
                count: results.length,
                result: results
            });
        })
        .catch(function(err) {
            response.status(500).send({ result: err });
        });
});

router.get('/gist-test', function(req, response, next) {
    const gh = getGitHubx();
    let gist = gh.getGist(); // not a gist yet
    gist.create({
        public: true,
        description: 'My first gist',
        files: {
            'file1.txt': {
                content: 'Arent gists great!'
            }
        }
    }).then(function({data}) {
        // Promises!
        let createdGist = data;
        return gist.read();
    }).then(function({data}) {
        let retrievedGist = data;
        console.log('Retreived', retrievedGist);
        response.status(200).send({'result': retrievedGist});

        // do interesting things
    }).catch(function(err) {
        console.log('promise rejected');
        response.status(500).send({'result': err});
    });
});

router.get('/get-gist-list', function(request, response) {

    let gh = getGitHubx();
    const me = gh.getUser();
    console.log('ME', me);
    me.listGists(
    ).then(function({data}) {
        //console.log('USER PROMISE', data);
        /*const results = gists.map((item) => ( {Return Object with 4 props} );*/
        const results = data.map((gist) => (
            {
                'url': gist.url,
                'htmlUrl': gist.html_url,
                'id': gist.id,
                'description': gist.description,
                'gitPullUrl': gist.git_pull_url,
                'ownerLogin': gist.owner.login,
                'avatarUrl': gist.owner.avatar_url,
                'files': Object.keys(gist.files)
            }
        ));
        response.status(200).send({
            'result': results,
            'count': results.length
        });
    }).catch(function(err) {
        console.log('USER Promise Rejected', err);
        response.status(500).send({'result': err});
    });
});

router.get('/delete', function(request, response, next) {
    const gistId = request.query.gistId;
    let gitHub = getGitHubx();
    let gist = gitHub.getGist(gistId);
    gist.delete().then(function({data}) {
        response.status(200).send({
            'result': 'success',
            'gistId': gistId,
            'data': data
        });

    }).catch(function(err) {
        response.status(500).send({'result': err});
    });
});

module.exports = router;
