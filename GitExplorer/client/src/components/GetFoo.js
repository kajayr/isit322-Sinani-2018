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
                <p></p>
                <div id={"FirstP"}>
                    <p id={"p1"}> Teachers change lives. Being the right person at the right time may be enough to change a person's life forever.<br />
                        Human beings are constantly changing.<br />
                        Whether for the good or for the bad, we do not stay the same.<br />
                        Having a positive influence in the form of a teacher can make or break a human being.<br />
                        Years after we are out of school, we remember the teachers that changed our lives.<br />
                        In most cases these may have been the first people that believed in us.<br />
                        That experience of having an authority figure believe that we could succeed carries us forever.<br />

                    </p>
                </div>
            </div>
        );
    }
}
export default GetFoo;