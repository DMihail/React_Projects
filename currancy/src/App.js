import React from 'react';
import CheckCurrency from './CheckCurrency';
import Viev from  './View';
import body from './img/body.png'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Currency: undefined
        };
        this.Check = this.Check.bind(this)
    }

    Check(event) {
        event.preventDefault();
        console.log(event.target.value);
        const currency = event.target.value;


        this.setState({
            Currency: currency
        });
    }
// <div style={{margin: '100px', position: 'absolute'}}>
//
// <Viev currency = {this.state.Currency} name = {'LTC'}/>
// </div>
// <div style={{margin: '100px', position: 'absolute'}}>
//
// <Viev currency = {this.state.Currency} name = {'ETH'}/>
// </div>
    render() {
            return (
                <div  class="container" style={{background: body}}>
                    <div className="row">
                        <div className="col"><div>
                        <CheckCurrency Currency = {this.Check}/>
                    </div>

                    <div style={{margin: '50px', position: 'absolute' }}>
                        <Viev currency = {this.state.Currency} name = {'BTC'} />
                    </div>
                </div>
                    </div>
                </div>
            );
        }
}
export default App;
