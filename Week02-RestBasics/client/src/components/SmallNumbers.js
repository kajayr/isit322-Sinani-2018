import React, {Component} from 'react';

class SmallNumbers extends Component{
    constructor(){
        super();
        this.state={
            one:'1',
            three:'3',
            seven:'7',
            nine:'9'
        };
    }
     getOne= () => {
        this.setState({one:'1'})
     };
    getThree= () => {
        this.setState({three:'3'})
    };
    getSeven= () => {
        this.setState({seven:'7'})
    };
    getNine= () => {
        this.setState({nine:'9'})
    };
    render(){
        return(
            <div className="App">
                <p className= "App-intro">
                    state.one:{this.state.one}
                </p>

                <p className= "App-intro">
                        state.three:{this.state.three}
                    </p>

                <p className= "App-intro">
                            state.Seven:{this.state.seven}
                        </p>
                <p className= "App-intro">
                                state.nine:{this.state.nine}
                            </p>
                <button className="getOne" onClick={this.getOne}>Click</button>
            </div>
        );
    }
}
export default SmallNumbers;