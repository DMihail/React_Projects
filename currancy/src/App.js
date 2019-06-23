import React from 'react';
import CheckCurrency from './CheckCurrency';
import Viev from  './View'

const URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/';

class App extends React.Component
{
    constructor(props)
    {
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

    render()
    {
       let a = this.getBitcoin;
       setInterval(a, 1000);
        return (
            <div>
                <CheckCurrency Currency = {this.Check}/>
                <Viev/>
            </div>
        );
    }
}
export default App;
