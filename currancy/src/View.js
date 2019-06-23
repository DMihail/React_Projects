import React from 'react';
import Fetch from './Fetch';
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
            data: undefined
        };
    }

    render() {
   setInterval(
       function () {
           fetch('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD' )

               .then(response => response.json())
              // .then(data => {console.log(data.ask)})
            //  .then((data) => {return this.data = data}
               .then((data) => { View.setState({data : {
                       ask: data.ask,
                       hour: data.changes.price.hour,
                       day: data.changes.price.day,
                       week: data.changes.price.week,
                       month: data.changes.price.month
                   }
       })})}, 1000);
        //if (this.data !== undefined) {
            console.log(this.data)
       // }
        if (this.data !== undefined) {
            this.setState({
                Price: this.data.ask,
                Hour: this.data.hour,
                Day: this.data.day,
                Week: this.data.week,
                Month: this.data.month
            });
        }
        return (
          <div>
              <table>
                  <tbody>
                  <tr><td>Price</td><td>{this.state.Price}</td></tr>
                      <tr><td>Percent</td><td>
                          <input type="checkbox" />
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