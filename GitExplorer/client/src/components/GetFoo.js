import React, {Component} from 'react';

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


                <button id="getFoo" onClick={this.getFoo}>Get Foo</button>


            </div>
        );
    }
}
export default GetFoo;