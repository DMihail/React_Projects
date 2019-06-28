import React from 'react';
import CheckCurrency from './CheckCurrency';
import Viev from  './View';
import style from './viev.css';
import body from './img/body.png'
import ethereum from './img/Ethereum.png';
import litecoin from  './img/litecoin.png';
import bitcoin from './img/bitcoin.png';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Currency: 'USD'
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
// <div style={{margin: '100px', position: 'relative' }}>
// <img src={litecoin} alt="" className = 'viev' style={style}/>
// <Viev currency = {this.state.Currency} name = {'LTC'} />
// </div>
// <div style={{margin: '100px', position: 'relative' }}>
// <img src={ethereum} alt="" className = 'viev' style={style}/>
// <Viev currency = {this.state.Currency} name = {'ETH'} />
// </div>
    render() {
            return (
                <div  class="container" style={{background: body}}>
                    <div className="row">
                        <div className="col"><div>
                        <CheckCurrency Currency = {this.Check}/>
                    <div style={{margin: '100px', position: 'relative' }}>
                        <img src={bitcoin} alt="" className = 'viev' style={style}/>
                        <Viev currency = {this.state.Currency} name = {'BTC'} />
                    </div>
                        </div>
                </div>
                    </div>
                </div>
            );
        }
}
export default App;
