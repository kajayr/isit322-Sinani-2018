import React, {Component} from 'react';
import '../css/App.css';
import styles from './elf-styles';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';

class GetGist extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='App'>
                <p className='App-intro' id='url'>
                    url: <a target='_new'
                            href={this.props.url}>{this.props.url}</a>
                </p>
                <p className='App-intro' id='description'>
                    description: {this.props.description}
                </p>
                <p className='App-intro' id='id'>
                    id: {this.props.id}
                </p>
                <p className='App-intro' id='pull-url'>
                    git pull url: <a target='_new'
                                     href={this.props.git_pull_url}>{this.props.git_pull_url}</a>
                </p>
                <p className='App-intro' id='login'>
                    login: {this.props.owner.login}
                </p>
                <p className='App-intro' id='owner url'>
                    owner url: <a target='_new'
                                  href={this.props.owner.url}>{this.props.owner.url}</a>
                </p>
                <Button
                    variant="raised"
                    color="primary"
                    onClick={this.props.gitGist}
                    className="getGist"
            >
            Get Gist
        </Button>

            </div>
        );
    }
}
// <Button bsStyle='success' className='getGist' onClick={this.props.gitGist}>Create a Gist</Button>
const mapStateToProps = (state) => {
    return {
        url: state.gitGist.url,
        id: state.gitGist.id,
        description: state.gitGist.description,
        git_pull_url: state.gitGist.git_pull_url,
        owner: {
            login: state.gitGist.owner.login,
            url: state.gitGist.owner.url
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        gitGist: () => {
            fetch('/gists/gist-test')
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                var getGist = json.result;
                dispatch({
                    type: 'GETGIST',
                    gitGist: getGist
                });
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });
        }
    };
};

GetGist = connect(mapStateToProps, mapDispatchToProps)(GetGist);

export default GetGist;