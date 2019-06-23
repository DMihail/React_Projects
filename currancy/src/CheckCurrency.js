import React from 'react';

class CheckCurrency extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: undefined
        };
        this.Check = this.Check.bind(this);
    }

    Check(event){
        event.preventDefault();
        this.setState({type: event.target.value});
    }
    render() {
        return (
            <div className='conteiner'>
                <div>
                    <h1>Select currency to exchange</h1>
                <label>
                    <select value={this.state.value} name={'check'}  onChange={this.props.Currency}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="RUB">RUB</option>
                        <option value="GBP">GBP</option>
                    </select>
                </label>
                </div>
            </div>
        );
    }
}
export default CheckCurrency;