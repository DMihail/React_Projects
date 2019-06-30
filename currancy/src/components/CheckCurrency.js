import React from 'react';
import style from '../css/viev.css';

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
                <div className = 'row'>
                    <div className = 'col'>
                        <div className = 'header'>
                            <h1 style={style}>Select currency to exchange : </h1>
                            <label className = 'select'>
                                <select value={this.state.value} name={'checking'}  onChange={this.props.Currency}>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="RUB">RUB</option>
                                    <option value="GBP">GBP</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CheckCurrency;