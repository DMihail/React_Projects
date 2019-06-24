import React from 'react';

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

        getBitcoin = async () =>{

          const response = await fetch(URL + 'BTC' + 'USD' );
              const data =  await response.json();
              console.log(data)
             this.setState({
                 Price: data.ask,
                 Hour: data.changes.price.hour,
                 Day: data.changes.price.day,
                 Week: data.changes.price.week,
                 Month: data.changes.price.month
            });
    }


    render() {
        let a = this.getBitcoin;
        a();
       // setInterval(a, 1000);
        return (
          <div>
              <table>
                  <tbody>
                  <tr><td>Price</td><td>{this.state.Price}</td></tr>
                      <tr><td>Percent</td><td>
                          <input type="checkbox" name={'percent'} onChange={this.Percent} value={this.state.percent}/>
                      </td></tr>
                      <tr><td>Hour</td><td>{this.state.Hour}</td></tr>
                        <tr><td>Day</td><td>{this.state.Day}</td></tr>
                      <tr><td>Week</td><td>{this.state.Week}</td></tr>
                  <tr><td>Month</td><td>{this.state.Month}</td></tr>
                  </tbody>
              </table>
          </div>
                );
        }
}
export default View;