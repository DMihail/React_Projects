import React from 'react';

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
        return (
          <div>
              <table>
                  <tbody>
                  <tr><td>Price</td><td>{this.state.Price}</td></tr>
                      <tr><td>Percent</td><td>
                          <input type="checkbox" name={'percent'} onChange={this.Percent} value={this.state.percent}/>
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