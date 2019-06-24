import React from 'react';
<<<<<<< HEAD
=======
import Fetch from './Fetch';
>>>>>>> origin/master
class View extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Price: undefined,
<<<<<<< HEAD
=======
            Percent: undefined,
>>>>>>> origin/master
            Hour: undefined,
            Day: undefined,
            Week: undefined,
            Month: undefined,
<<<<<<< HEAD
            data:undefined
        };
        this.Percent = this.Percent.bind(this);
    }
           //  this.setState({
           //      Price: monet.ask,
           //      Hour: monet.price.hour,
           //      Day: monet.price.day,
           //      Week: monet.price.week,
           //      Month: monet.price.month
           // });

    Percent(event){
            event.preventDefault();
             console.log(event.target.value);
        this.setState({percent : event.target.value});
    }

    render() {
=======
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
>>>>>>> origin/master
        return (
          <div>
              <table>
                  <tbody>
                  <tr><td>Price</td><td>{this.state.Price}</td></tr>
                      <tr><td>Percent</td><td>
<<<<<<< HEAD
                          <input type="checkbox" name={'percent'} onChange={this.Percent} value={this.state.percent}/>
=======
                          <input type="checkbox" />
>>>>>>> origin/master
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