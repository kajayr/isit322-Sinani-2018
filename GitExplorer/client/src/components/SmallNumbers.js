import React, {Component} from 'react';

class SmallNumbers extends Component{
    constructor(){
        super();
        this.state={
            x:'xxx',
        xx:'xxx',
            xxx:'xxx'

        };
    }
     getNumbers= () => {
        this.setState({x:'425', xx: '444', xxx: '0923'})
     };

    render(){
        return(
            <div className="App">
                <p className= "App-intro">
                    {this.state.x}-
                        {this.state.xx}-
                            {this.state.xxx}
                        </p>
                <button className="getOne" onClick={this.getNumbers}>Show The Number</button>
            </div>
        );
    }
}
export default SmallNumbers;