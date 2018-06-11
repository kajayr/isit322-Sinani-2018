import fieldDefinitions from '../field-definitions';

const tempGitUser = {};
for (let value of fieldDefinitions) {
    tempGitUser[value.id] = value.sample;
}

const gistState = {
    getFoo: {
        foo: 'foo',
        file: 'afile.js'
    },
    numbers: {
        nine: '0',
        eight: '0',
        seven: '0',
        six: '0',
        five: '0',
        four: '0',
        three: '0',
        two: '0',
        one: '0'
    },
    gitData: tempGitUser,
    gitGist: {
        url: 'url-qux',
        id: 'id-qux',
        git_pull_url: 'pull-url-qux',
        description: 'description-qux',
        owner: {
            login: 'owner login',
            url: 'owner url'
        }
    },
    fields: fieldDefinitions
};

const gistReducer = (state = gistState, action) => {
    switch (action.type) {
        case 'NUMBER_NINE':
            return Object.assign({}, state, {
                numbers: {
                    nine: 9,
                    eight: state.numbers.eight
                }
            });

        case 'NUMBER_EIGHT':
            return Object.assign({}, state, {
                numbers: {
                    nine: state.numbers.nine,
                    eight: 8
                }
            });

        case 'GETFOO':
            return Object.assign({}, state, {getFoo: action.getFoo});

        case 'GETUSER':
            return Object.assign({}, state, {gitData: action.gitData});

        case 'GETGIST':
            return Object.assign({}, state, {gitGist: action.gitGist});

        default:
            return state;
    }
};

export default gistReducer;
