import React, {Component} from 'react';
import styles from './elf-styles';
import Button from '@material-ui/core/Button';

class GetFoo extends Component{
    constructor(){
        super(      );
        this.state ={
            file:'the result will be placed here',
            foo:'waiting for server',
            status:'waiting for server'
        };
    }
    getFoo = () => {
        const that = this;
        fetch('/api/foo')
            .then(function (response) {
               // that.debug('GETONE-FETCH-ONE');
                return response.json();
            }).then(function (json) {
           // that.debug('GETONE-FETCH-TWO');
            //that.debug('parsed json', json);
            that.setState(foo => (json));
        }).catch(function (ex) {
            console.log('parsing failed', ex);
        });
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    file: {this.state.file}
                </p>

                <p className="App-intro">
                    status: {this.state.status}
                </p>

                <Button
                    variant="raised"
                    color="primary"
                    onClick={this.getFoo}
                    id="getFoo"
                    >
                    Get Foo
                </Button>
                {/*<button id="getFoo" onClick={this.getFoo}>Get Foo</button>*/}
                <br />
                <div id={"FirstP"}>
                    <p id={"p1"}> The good life is a process, not a state of being. It is a direction not a destination.
                    </p>
                </div>
            </div>
        );
    }
}
export default GetFoo;