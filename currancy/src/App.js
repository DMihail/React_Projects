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
    render() {
            return (
                <div  class="container" style={{background: body, margin: '50px'}}>
                    <div className="row">
                        <div>
                            <CheckCurrency Currency = {this.Check}/>
                        </div>
                        <div className="col">
                    <div className = 'bitcoin' >
                        <img src={bitcoin} alt="" />
                        <Viev currency = {this.state.Currency} name = {'BTC'} />
                    </div>
                            <div className= ' col'>
                                <div className = 'litecoin' >
                                    <img src={litecoin} alt="" />
                                    <Viev currency = {this.state.Currency} name = {'LTC'} />
                                </div>
                            </div>
                            <div className= ' col'>
                                <div className = 'ethereum' >
                                    <img src={ethereum} alt="" />
                                    <Viev currency = {this.state.Currency} name = {'ETH'} />
                                </div>
                            </div>
                </div>
                    </div>
                </div>
            );
        }
}
export default App;
