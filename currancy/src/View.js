import React from 'react';
import bitcoin from './img/bitcoin.png';
import litecoin from './img/litecoin.png';
import ethereum from  './img/Ethereum.png';
const URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/';

class View extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Price: undefined,
            Percent: undefined,
            Hour: undefined,
            Day: undefined,
            Week: undefined,
            Month: undefined,
            data:undefined
        };
        this.Percent = this.Percent.bind(this);
    }


    Percent(event){
            event.preventDefault();
             console.log(event.target.value);
        this.setState({percent : event.target.value});
    }

        getData = async (name, value) =>{
          const response = await fetch(URL + name + value );
              const data =  await response.json();
              console.log(data);
             this.setState({
                 Price: data.ask,
                 Hour: data.changes.price.hour,
                 Day: data.changes.price.day,
                 Week: data.changes.price.week,
                 Month: data.changes.price.month
            });
    };


    render() {
        this.getData(this.props.name, this.props.currency);
        //console.log(this.props.name);
        //console.log(this.props.currency);
        let img;
       switch (this.props.name) {
           case 'BTC':
               img = bitcoin;
                break;
           case 'LTC':
               img = litecoin;
               break;
           case 'ETH':
               img = ethereum;
               break;
       }
        return (
          <div>
                <img src={img} alt="" style={{position: 'absolute'}}/>
                <div>
              <table>
                  <tbody>
                  <tr style={{color: 'white'}}><td><h3>Price</h3></td><td>{this.state.Price}</td></tr>
                      <tr style={{color: 'white'}}><td>Percent</td><td>
                          <input type="checkbox" name={'percent'} onChange={this.Percent} value={this.state.percent}/>
                      </td></tr>
                      <tr style={{color: 'gray'}}><td>Hour</td><td>{this.state.Hour}</td></tr>
                        <tr style={{color: 'gray'}}><td>Day</td><td>{this.state.Day}</td></tr>
                      <tr style={{color: 'gray'}}><td>Week</td><td>{this.state.Week}</td></tr>
                  <tr style={{color: 'gray'}}><td>Month</td><td>{this.state.Month}</td></tr>
                  </tbody>
              </table>
                </div>
          </div>
                );
        }
}
export default View;