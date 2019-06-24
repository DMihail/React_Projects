import React from 'react';
import CheckCurrency from './CheckCurrency';
import Viev from  './View'

<<<<<<< HEAD
const URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/';

=======
>>>>>>> origin/master
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
<<<<<<< HEAD

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
=======
    Check(event) {
        event.preventDefault();
        console.log(event.target.check.value);
        const currency = event.target.check.value;


        this.setState({
            Currency: currency
        });
    }
    render()
    {
        return (
            <div>
                <CheckCurrency/>
>>>>>>> origin/master
                <Viev/>
            </div>
        );
    }
}
export default App;
