import '../css/App.css';
import React, {Component} from 'react';
import styles from './elf-styles';
import LButton from '@material-ui/core/Button';
import {Button} from 'react-bootstrap';

class GistLister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
        this.gistIterator = this.gistIterator.bind(this);
        this.gistDelete = this.gistDelete.bind(this);
    }

    gistIterator(event) {
        console.log(event.target.id)
        if (event.target.id === 'nextGist') {
            this.setState((prevState, props) => {
                if (prevState.index < this.props.gistList.length - 1) {
                    return {index: prevState.index + 1};
                }
            });
        }
        else {
            if (this.state.index > 0) {
                this.setState((prevState, props) => {
                    return {index: prevState.index - 1};
                });
            }
        }
    }

    gistDelete() {
        const id = this.props.gistList[this.state.index].id;
        this.props.gistDelete(id, () => {
            this.props.fetchGistLists();
        });
    }

    render() {
        return (
            <div className='renderBlock'><h2>Gist Lister</h2>
                {this.props.gistList.length > 1 &&
                <ul className='myUl'>
                    <li>Index: {this.state.index + 1} / {this.props.gistList.length}</li>
                    <li id='htmlurl'>Html Url: <a target='_new'
                                                  href={this.props.gistList[this.state.index].htmlUrl}>{this.props.gistList[this.state.index].htmlUrl}</a>
                    </li>
                    <li id='id'>Id: {this.props.gistList[this.state.index].id}</li>
                    <li id='gitpullurl'>Git Pull Url: <a target='_new'
                                                         href={this.props.gistList[this.state.index].gitPullUrl}>{this.props.gistList[this.state.index].gitPullUrl}</a></li>
                    <li id='description'>Description: {this.props.gistList[this.state.index].description}</li>
                    <li id='ownerlogin'>Owner Login: {this.props.gistList[this.state.index].ownerLogin}</li>
                    <img src={this.props.gistList[this.state.index].avatarUrl} className='myImage' alt='blah'/>
                    <li id='avatarUrl'>Avatar Url: {this.props.gistList[0].avatarUrl}</li>
                </ul>
                }
                <LButton
                    variant="raised"
                    color="primary"
                    disabled={this.props.gistCanIterate}
                    onClick={this.props.fetchGistLists}
                    id="gistList"
            >
            Get Gists
        </LButton>
                <Button bsStyle='primary' id='prevGist' className='btnStyle' onClick={this.gistIterator}
                        disabled={!this.props.gistCanIterate}>Prev Gist</Button>
                <Button bsStyle='success' id='nextGist' className='btnStyle' onClick={this.gistIterator}
                        disabled={!this.props.gistCanIterate}>Next Gist</Button>

                <LButton
                    variant="raised"
                    color="primary"
                    disabled={!this.props.gistCanIterate}
                    onClick={this.gistDelete}
                    id="gistDelete"
                    >
                    Delete
                </LButton>

                <ul></ul>
                <ul></ul>
                <ul></ul>
                <ul></ul>
            </div>
        );
    }
}

export default GistLister;