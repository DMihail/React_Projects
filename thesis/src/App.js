import React from 'react';
import Tables from './CreateTable';
import Venger from './VengerTable';
import Params from './Params'
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            N: undefined,
            M: undefined,
            Method: undefined
        };
        this.Method = this.Method.bind(this)
    }
    Method(event){
        event.preventDefault();
        console.log(event.target.metod.value);
        console.log('N: ' + event.target.N.value + ', ' + 'M: ' + event.target.M.value);
     let  m =  event.target.M.value;
     let n =  event.target.N.value;
     const metod = event.target.metod.value;

     this.setState({
         N: n,
         M: m,
         Method: metod
     });
    }
    render() {
    if (this.state.Method === 'Venger') {
            return <div><Venger m = {this.state.M} n = {this.state.N} /></div>
        } else
        if (this.state.Method === 'Poten'){
            return <div><Tables m = {this.state.M} n = {this.state.N}/></div>
        }
        else {

            return (
                <div>
                    <Params method={this.Method}/>
                </div>
            )
        }
    }

}

export default App;
