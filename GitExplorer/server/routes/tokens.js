const token = require('./tokens');

const tokens = [
'5539bbb05a7616d99130b36e5a3cc83c0ffb0ad4'
    ];
let getGitHub = function() {
    let gh;
    if (true) {
        gh = new GitHub({
            token: token
        });
    } else {
        gh = new GitHub({
            username: 'kajayr',
            password: ''
        });
    }
    return gh;
};

module.exports = tokens[0];