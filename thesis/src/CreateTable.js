import React from 'react';

function Send() {
    let stocks = [];
    let needs = [];
    let matrix = [];
    let k = 0;
    for (let i = 1; i < 6; i++) {

        stocks.push(parseInt(document.getElementById("a" + i ).value));
        needs.push(parseInt(document.getElementById("b" + i ).value));
        matrix.push([]);
        for (let j = 1; j < 6;j++ ) {
            matrix[k].push(
                parseInt(document.getElementById(i +',' + j).value)
            );
        }
        k++;
    }

    console.log(stocks);
    console.log(needs);
    console.log(matrix);
}

class Table extends React.Component {


    header = [];
    row = [];
    nedds = [];

    CreateHeaderTable(m) {
        for (let i = 0; i < m + 2; i++) {
            if (i === 0) {
                this.header.push(<th scope='coll'>A/B</th>);
            } else if (i < m + 1) {
                this.header.push(<th scope='coll'>S{i}</th>);
            } else {
                this.header.push(<th scope='coll'>Stocks</th>);
            }

        }
    }


    CreateRow(m) {
        for (let i = 1; i < m + 1; i++) {

            // eslint-disable-next-line jsx-a11y/scope
            this.row.push(<tr scope='row'>{this.CreateColl(m, i)}</tr>)
        }
    }

    CreateColl(n, i) {
        let coll = [];
        for (let j = 0; j < n + 1; j++) {
            if (j == 0) {
                coll.push(<td>A{i}</td>)
            } else if (i < n + 1) {
                coll.push(<td>{i + ',' + j} <input type={'text'} id={i + ',' + j}/></td>)
            }

        }
        coll.push(<td><input type={'text'} id={'a' + i}/></td>);

        return coll;
    }

    Needs(n) {

        for (let i = 0; i < n + 2; i++) {
            if (i === 0) {
                this.nedds.push(<td>Need</td>)
            } else if (i < n + 1) {
                this.nedds.push(<td><input type="text" id={'b' + i}/></td>)
            } else {
                this.nedds.push(<td></td>)
            }
        }
        return this.nedds;
    }

    render() {
        let m = this.props.m;
        let n = this.props.n;
        this.CreateHeaderTable(m);
        this.CreateRow(m, m);
        this.Needs(n);
        console.log(m, n)
        if (m === undefined || n === undefined) {
            return (<div>Введите коректные данные</div>)
        }else {
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

                    <button type="submit" className="btn btn-primary" onClick={Send}>Send</button>
                </div>
            );
        }
    }
}
export default Table;