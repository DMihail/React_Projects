import React from 'react';
import CheckCurrency from './CheckCurrency';
import Viev from  './View'

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
                <Viev/>
            </div>
        );
    }
}
export default App;
