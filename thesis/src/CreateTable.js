import React from 'react';
var Min = require("./MinElement");



class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: undefined,
            mass: undefined,
            m: undefined,
            n: undefined
        };
        this.Send = this.Send.bind(this)
    }

    header = [];
   row = [];
   nedds = [];
   result = null;
   resultMsss = [];
    CreateHeaderTable(m) {
        for (let i = 0; i < m + 2; i++) {
            if (i === 0) {
                this.header.push(<th scope='coll'>A/B</th>);
            } else
                if (i < m +1 ) {
                this.header.push(<th scope='coll'>S{i}</th>);
            }
                else {
                    this.header.push(<th scope='coll'>Stocks</th>);
                }

        }
    }


    CreateRow(m, n) {
        for (let i = 1; i < m + 1; i++) {
            this.row.push(<tr scope='row'>{this.CreateColl(n, i)}</tr>)
        }
    }

     CreateColl(n, i) {
        let coll = [];
        for (let j = 0; j < n + 1; j++) {
            if (j == 0){
              coll.push(<td>A{i}</td>)
            } else
                if (i < n + 1 ){
                coll.push(<td>{i + ',' + j} <input type={'text'} id={i + ',' + j}/></td>)
            }

        }
        coll.push(<td> <input type={'text'} id={'a' + i}/></td>);

        return coll;
    }

    Needs(n){

        for (let i = 0; i < n + 2; i++){
            if (i == 0) {
                this.nedds.push(<td>Need</td>)
            }
                else
                    if (i < n+1) {
                        this.nedds.push(<td>    <input type="text" id={'b' + i}/></td>)
                    }
                    else {
                        this.nedds.push(<td></td>)
                    }
        }
        return this.nedds;
    }


    Send(event) {
        event.preventDefault();
        this.setState({
            m: Number(this.props.m),
            n: Number(this.props.n)
        });
        let stocks = [];
        let needs = [];
        let matrix = [];
        let matrix2 = [];
        let k = 0;
        for (let i = 1; i < this.state.m; i++) {

            stocks.push(parseInt(document.getElementById("a" + i ).value));
            needs.push(parseInt(document.getElementById("b" + i ).value));
            matrix.push([]);
            matrix2.push([]);
            for (let j = 1; j < this.state.name;j++ ) {
                matrix[k].push(
                    parseInt(document.getElementById(i +',' + j).value)
                );
                matrix2[k].push(
                    parseInt(document.getElementById(i +',' + j).value)
                );
            }
            k++;
        }

        console.log(stocks);
        console.log(needs);
        console.log(matrix);
    //     const a = [10, 20, 30],
    // b = [15,20, 25],
    // c = [[5,3,1],[3,2,4],[4,1,2]],
    // d = [[5,3,1],[3,2,4],[4,1,2]];
            const a = [23, 25, 17],
        b = [14,10, 16, 10, 15],
        c = [[4,9,2, 5, 3],[4,6,2,1,8],[6,2,3,4,5]],
        d = [[4,9,2, 5, 3],[4,6,2,1,8],[6,2,3,4,5]];
         let M = new Min();
        M.getting(a, b, c, d);
       // M.getting(stocks, needs, matrix, matrix2);
        M.CloseOrOpen();
        console.log(M.Over());
        let s = M.Over();
      this.setState({result: s.zfunc})

        let coll = [];
            for (let i = 0 ; i <  s.mass.length; i++ ) {
                coll = [];
                for (let j = 0; j < s.mass[i].length; j++){
                        coll.push(<td>{s.mass[i][j]}</td>)
                }
                this.resultMsss.push(<tr>{coll}</tr>)
            }
    }
    Resulr(){
        if (this.state.result !== undefined) {
            return <div className="container"><div>
                <table>
                    <tbody>
                    {this.resultMsss}
                    </tbody>
                </table>

                <h1>Z =   {this.state.result}</h1></div>
           </div>
        }

    }

    render() {
        this.CreateHeaderTable(Number(this.props.m));
        this.CreateRow(Number(this.props.m), Number(this.props.n));
        this.Needs(Number(this.props.n));
        let result =this.Resulr();
        return (
            <div className="container">
                <table className={'table table-bordered'}>
                    <thead>
                    <tr>
                        {this.header}
                    </tr>
                    </thead>
                    <tbody>
                    {this.row}
                    <tr>
                        {this.nedds}
                    </tr>
                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary" onClick={this.Send}>Send</button>
                {result}
            </div>
        );
    }
}
export default Table;