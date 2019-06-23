const fetch = require("node-fetch");

 module.exports = class Fetch {
    constructor(){
        this.URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/';
        this.currency = undefined;
        this.bdata = undefined;
        this.ldata = undefined;
        this.tdata = undefined;
    }
    getBitcoin(){
            fetch(this.URL + 'BTC' + this.currency )
            // .then((response)=>{
        //             //     if (response.status !== 200){
        //             //         throw Error('Status kod  ' + response.status);
        //             //     }
        //             // })
            .then(response => response.json())
          //   .then(data => console.log(data))
            .then((data) => {return  this.bdata = {ask: data.ask, hour: data.changes.price.hour, day: data.changes.price.day, week: data.changes.price.week, month: data.changes.price.month}});
        console.log(this.bdata)
        return this.bdata;
    }
    getLitecoin(){
        fetch(this.URL + 'LTC' + this.currency )
        // .then((response)=>{
        //             //     if (response.status !== 200){
        //             //         throw Error('Status kod  ' + response.status);
        //             //     }
        //             // })
            .then(response => response.json())
            //   .then(data => console.log(data))
            .then((data) => {return  this.ldata = {ask: data.ask, hour: data.changes.price.hour, day: data.changes.price.day, week: data.changes.price.week, month: data.changes.price.month}});
        console.log(this.ldata)
        return this.ldata;
    }

    getEthereum(){
        fetch(this.URL + 'ETH' + this.currency )
        // .then((response)=>{
        //             //     if (response.status !== 200){
        //             //         throw Error('Status kod  ' + response.status);
        //             //     }
        //             // })
            .then(response => response.json())
            //   .then(data => console.log(data))
            .then((data) => {return  this.tdata = {ask: data.ask, hour: data.changes.price.hour, day: data.changes.price.day, week: data.changes.price.week, month: data.changes.price.month}});
        console.log(this.tdata)
        return this.tdata;
    }

    getCurrency(currency){
            this.currency = currency;
    }
};
//
//  let data = new Fetch();
// data.getCurrency('USD');
// setInterval( function (){data.getBitcoin()}, 1000);
// // data.getLitecoin();
// // data.getEthereum();