import React from 'react';

class Table extends React.Component {
    header = [];
   row = [];
   nedds = [];
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


    CreateRow(m) {
        for (let i = 1; i < m + 1; i++) {

            // eslint-disable-next-line jsx-a11y/scope
            this.row.push(<tr scope='row'>{this.CreateColl(m, i)}</tr>)
        }
    }

     CreateColl(n, i) {
        let coll = [];
        for (let j = 0; j < n + 1; j++) {
            if (j == 0){
              coll.push(<td>A{i}</td>)
            } else
                if (i <n + 1 ){
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
                this.nedds.push(<td id={'b' + i}><input type="text" id={'b' + i}/></td>)
            }
                    else {
                        this.nedds.push(<td></td>)
                    }
        }
        return this.nedds;
    }

    render() {
        this.CreateHeaderTable(5);
        this.CreateRow(5, 5);
        this.Needs(5);
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
                <button type="button" className="btn btn-primary">Send</button>
            </div>
        );
    }
}
export default Table;