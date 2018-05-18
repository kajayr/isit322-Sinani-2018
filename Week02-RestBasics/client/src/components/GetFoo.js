import React, {Component} from 'react';

class GetFoo extends Component{
    constructor(){
        super();
        this.state ={
            file:'the result will be placed here',
            foo:'waiting for server'
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
                    state.file:{this.state.file}
                </p>

                <p className="App-intro">
                    state.foo:{this.state.foo}
                </p>


                <button className="getFoo" onClick={this.getFoo}>Click</button>


            </div>
        );
    }
}
export default GetFoo;