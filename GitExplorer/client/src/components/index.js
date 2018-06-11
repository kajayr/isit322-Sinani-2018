import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import ElfHeader from './ElfHeader';
import '../css/menu.css';
import '../css/App.css';
import 'whatwg-fetch';
import GetFoo from "./GetFoo";
import GetGit from "./GetGit";
import GetGist from "./GetGist";
import GistLister from './GistLister';
import fieldDefinitions from '../field-definitions';
import SmallNumbers from "./SmallNumbers";

class App extends Component {
    constructor() {
        super();
        const tempGitUser = {};
        for (let value of fieldDefinitions) {
            tempGitUser[value.id] = value.sample;
        }
        this.state = {
            gistCanIterate: false,
            gistList: [
                {
                    'htmlUrl': 'https://gist.github.com/2bfffeb6551aa601940efd652b9593ef',
                    'id': '2bfffeb6551aa601940efd652b9593ef',
                    'gitPullUrl': 'https://gist.github.com/2bfffeb6551aa601940efd652b9593ef.git',
                    'description': 'Gist',
                    'ownerLogin': 'owner login',
                    'avatarUrl': 'https://avatars3.githubusercontent.com/u/17889728?v=4',
                    'files': []
                }
            ]
        };
        this.fetchGistLists = this.fetchGistLists.bind(this);
        this.gistDelete = this.gistDelete.bind(this);
        this.gistToMarkDown = this.gistToMarkDown.bind(this);
        this.updateGistFromFile = this.updateGistFromFile.bind(this);
    }

    fetchGistLists(event) {
        const that = this;
        fetch('/gists/get-gist-list')
            .then(function(response) {
                return response.json();
            }).then(function(json) {

            var getGistList = json.result;
            that.setState({
                gistCanIterate: true,
                gistList: getGistList
            });
        }).catch(function(ex) {
        });
        if (event) {
            event.preventDefault();
        }
    };

    gistDelete(param, callback) {
        var url = '/gists/delete?gistId=' + param;

        return fetch(url)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                callback(json);
            })
            .catch((ex) => console.log('Fetch Exception', ex));
    };

    gistToMarkDown(id, callback) {
        var url = '/gists/gistToMarkdown?gistId=' + id;

        return fetch(url)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                callback(json);
            })
            .catch((ex) => console.log('Fetch Exception', ex));
    };

    updateGistFromFile(id, callback) {
        var url = '/gists/gistFileUpdate?gistId=' + id;

        return fetch(url)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                callback(json);
            })
            .catch((ex) => console.log('Fetch Exception', ex));
    };


    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <ElfHeader/>
                    <Route exact path="/GetFoo" component={GetFoo}/>
                    <Route exact path="/GetGit" component={GetGit}/>
                    <Route exact path='/ShowGist' component={GetGist}/>
                    <Route exact path='/get-gist-list'
                           render={(props) => (
                               <GistLister {...props}
                                           gistCanIterate={this.state.gistCanIterate}
                                           gistList={this.state.gistList}
                                           fetchGistLists={this.fetchGistLists}
                                           gistDelete={this.gistDelete}
                                           gistToMarkDown={this.gistToMarkDown}
                                           updateGistFromFile={this.updateGistFromFile} />
                           )}
                    />
                    <Route exact path="/SmallNumbers" component={SmallNumbers}/>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;