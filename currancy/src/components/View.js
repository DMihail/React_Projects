import React from 'react';
import style from '../css/viev.css';

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
            data:undefined
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
        let massName = ['Price : ', 'Hour change : ', 'Day change : ', 'Week change : ', 'Month change : '];
        let massData = [this.state.Price,  this.state.Hour, this.state.Day, this.state.Week, this.state.Month];
        for (let i = 0; i < massName.length; i++){
                if (massData[i] < 0) {
                    this.Table.push(<tr>
                        <td className = 'data' style={style}>{massName[i]}</td>
                        <td className = 'negative' style={style}>{massData[i] + ' ' + this.state.data}</td>
                    </tr>)
                } else {
                    this.Table.push(<tr>
                        <td className = 'data' style={style}>{massName[i]}</td>
                        <td className='positive' style={style}>{massData[i] + ' ' + this.state.data}</td>
                    </tr>)
            }
        }
    }


    render() {
        let currency;
      // console.log(this.state.Percent);
        this.getData(this.props.name, this.props.currency);
            switch (this.props.currency) {
                case 'USD':
                    this.state.data = '$';
                    if (this.state.Percent) {
                        this.state.data = '%';
                    }
                    currency = '$';
                    break;
                case 'EUR':
                    this.state.data = String.fromCharCode(8364);
                    currency = String.fromCharCode(8364);
                    if (this.state.Percent) {
                        this.state.data = '%';
                    }
                    break;
                case 'RUB':
                    this.state.data = String.fromCharCode(8381);
                    currency = String.fromCharCode(8381);
                    if (this.state.Percent) {
                        this.state.data = '%';
                    }
                    break;
                case 'GBP':
                    this.state.data = String.fromCharCode(163);
                    currency = String.fromCharCode(163);
                    if (this.state.Percent) {
                        this.state.data = '%';
                    }
                    break;
        }
        this.CreateTable();
        return (
          <div>
                <div className={'img_data'}>
              <table style={{position: 'absolute'}}>
                  <tbody>
                  <tr>
                  <td className = 'Price' style={style}>Price : </td>
                  <td className = 'PriceData' style={style}>{currency + ' ' + this.state.Price}</td>
                  </tr>
                  <tr>
                      <td className='Percent' style={style}>Percent change :</td>
                      <td><label className='clicck'><input
                          type='checkbox' checked={this.state.Percent} id='check' onChange={this.Percent.bind(this)}/><i for="check"/> </label></td>
                  </tr>
                  {this.Table}
                  </tbody>
              </table>
                </div>
          </div>
            );
        }
}
export default View;