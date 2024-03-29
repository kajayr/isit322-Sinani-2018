import '../css/App.css';
import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import { red500 } from 'material-ui/styles/colors';
import styles from './elf-styles';
import RaisedButton from 'material-ui/RaisedButton';
import {Button} from 'react-bootstrap';

class GistLister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
        this.gistIterator = this.gistIterator.bind(this);
        this.gistDelete = this.gistDelete.bind(this);
        this.gistToMarkDown = this.gistToMarkDown.bind(this);
        this.updateGistFromFile = this.updateGistFromFile.bind(this);
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

    gistToMarkDown() {
        const myId = this.props.gistList[this.state.index].id;
        this.props.gistToMarkDown(myId, () => {
            this.props.fetchGistLists();
        });
    }

    updateGistFromFile() {
        const myId = this.props.gistList[this.state.index].id;
        this.props.updateGistFromFile(myId, () => {
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
                <RaisedButton
                    id='gistList'
                    label="Get Gists"
                    labelPosition="before"
                    primary={true}
                    disabled={this.props.gistCanIterate}
                    icon={<FontIcon
                        class="material-icons"
                        color={red500}>rss_feed</FontIcon>}
                    style={styles.button}
                    onClick={this.props.fetchGistLists}
                />
                <Button bsStyle='primary' id='prevGist' className='btnStyle' onClick={this.gistIterator}
                        disabled={!this.props.gistCanIterate}>Prev Gist</Button>
                <Button bsStyle='success' id='nextGist' className='btnStyle' onClick={this.gistIterator}
                        disabled={!this.props.gistCanIterate}>Next Gist</Button>
                <RaisedButton
                    id='gistDelete'
                    label="Delete"
                    labelPosition="before"
                    primary={true}
                    disabled={!this.props.gistCanIterate}
                    icon={<FontIcon
                        class="material-icons"
                        color={red500}>rss_feed</FontIcon>}
                    style={styles.button}
                    onClick={this.gistDelete}
                />
                <RaisedButton
                    id='gistToMarkdown'
                    label="Gist To Markdown"
                    labelPosition="before"
                    primary={true}
                    disabled={!this.props.gistCanIterate}
                    icon={<FontIcon
                        class="material-icons"
                        color={red500}>rss_feed</FontIcon>}
                    style={styles.button}
                    onClick={this.gistToMarkDown}
                />
                <RaisedButton
                    id='updateGistFromFile'
                    label="Update Gist From File"
                    labelPosition="before"
                    primary={true}
                    disabled={!this.props.gistCanIterate}
                    icon={<FontIcon
                        class="material-icons"
                        color={red500}>rss_feed</FontIcon>}
                    style={styles.button}
                    onClick={this.updateGistFromFile}
                />

                <ul></ul>
                <ul></ul>
                <ul></ul>
                <ul></ul>
            </div>
        );
    }
}

export default GistLister;