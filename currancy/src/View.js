import React from 'react';
import style from './viev.css';

const URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/';

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Price: undefined,
            Percent: false,
            Hour: undefined,
            Day: undefined,
            Week: undefined,
            Month: undefined,
            data:undefined,
        };
        this.Percent = this.Percent.bind(this);

    }
    Table = [];


    Percent(event){
            event.preventDefault();
            if (event.target.checked) {
                this.setState({Percent : true});
            }else{
                this.setState({Percent : false});
            }
             console.log(event.target.checked);
        this.setState({Percent : event.target.checked});
    }

    getData = async (name, value) => {
          const response = await fetch(URL + name + value );
              const data =  await response.json();
              console.log(data);
                if (this.state.Percent === true) {
                    this.setState({
                        Price: data.ask,
                        Hour: data.changes.percent.hour,
                        Day: data.changes.percent.day,
                        Week: data.changes.percent.week,
                        Month: data.changes.percent.month
                    });
                }else {
                    this.setState({
                        Price: data.ask,
                        Hour: data.changes.price.hour,
                        Day: data.changes.price.day,
                        Week: data.changes.price.week,
                        Month: data.changes.price.month
                    });
                }

    };

    CreateTable(){
        this.Table = [];
        let massName = ['Price : ', 'Percent change : ', 'Hour change : ', 'Day change : ', 'Week change : ', 'Month change : '];
        let massData = [this.state.Price,  this.state.Hour, this.state.Day, this.state.Week, this.state.Month];
        for (let i = 0; i < massName.length; i++){
            if (massName[i] === 'Percent change : ') {
                this.Table.push(<tr><td className = 'data' style={style}>{massName[i]}</td><td style={style}><input
                    type='checkbox' defaultChecked={this.state.Percent} onChange={this.Percent}/></td></tr>)
            }else {
                if (massData[i] < 0) {
                    this.Table.push(<tr>
                        <td className='data' style={style}>{massName[i]}</td>
                        <td className='negative' style={style}>{massData[i] + ' ' + this.state.data}</td>
                    </tr>)
                } else {
                    this.Table.push(<tr>
                        <td className='data' style={style}>{massName[i]}</td>
                        <td className='positive' style={style}>{massData[i] + ' ' + this.state.data}</td>
                    </tr>)
                }
            }
        }
    }


    render() {
        console.log(this.state.Percent);
        this.getData(this.props.name, this.props.currency);
        if (this.state.Percent === true){
            this.state.data = '%';
        }else {
            switch (this.props.currency) {
                case 'USD':
                    this.state.data = '$';
                    break;
                case 'EUR':
                    this.state.data = String.fromCharCode(8364);
                    break;
                case 'RUB':
                    this.state.data = String.fromCharCode(8381);
                    break;
                case 'GBP':
                    this.state.data = String.fromCharCode(163);
                    break;
            }
        }
        this.CreateTable();
        return (
          <div>
                <div className={'img_data'}>
              <table style={{position: 'absolute'}}>
                  <tbody>
                  {this.Table}
                  </tbody>
              </table>
                </div>
          </div>
            );
        }
}
export default View;