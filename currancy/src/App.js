import React from 'react';
import CheckCurrency from './CheckCurrency';
import Viev from  './View';



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

    render() {
            return (
                <div>
                    <CheckCurrency Currency = {this.Check}/>
                    <Viev/>
                </div>
            );
        }
}
export default App;
