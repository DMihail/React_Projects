import React from 'react';


class VengerTable extends React.Component {

    row = [];



    CreateRow(m) {
        for (let i = 1; i < m + 1; i++) {

            // eslint-disable-next-line jsx-a11y/scope
            this.row.push(<tr scope='row'>{this.CreateColl(m, i)}</tr>)
        }
    }

    CreateColl(n, i) {
        let coll = [];
        for (let j = 0; j < n ; j++) {
                coll.push(<td> <input type={'text'} id={i + ',' + j}/></td>)
        }

        return coll;
    }
    Send(n, m) {

         this.matrix = [];
         let k = 0;
        for (let i = 0; i < m; i++) {
            this.matrix.push([]);
            for (let j = 0; j < n; j++ ) {
                this.matrix[i].push(
                    parseInt(document.getElementById(i +',' + j).value)
                );
            }
            k++;
        }
        console.log(this.matrix);
    }

    render() {
        let m = this.props.m;
        let n = this.props.n;

        this.CreateRow(m, n);

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
                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary" onClick={this.Send(n, m)}>Send</button>
            </div>
        );
    }
}
export default VengerTable;