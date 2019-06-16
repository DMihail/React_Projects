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


     Send() {
        let matrix = [];
        for (let i = 0; i < this.m; i++) {
            matrix.push([]);
            for (let j = 0; j < this.n; j++ ) {
                matrix[i].push(
                    parseInt(document.getElementById(i +',' + j).value)
                );
            }
        }
        console.log(matrix);
    }


    render() {
        let m = this.props.m;
        let n = this.props.n;
        console.log(m, n);
        this.CreateRow(m, n);

        if (m !== undefined || n !== undefined) {
            return (
                <div className="container">
                    <table className={'table table-bordered'}>
                        <tbody>
                        {this.row}
                        </tbody>
                    </table>
                    <button type="submit" className="btn btn-primary" onClick={this.Send}>Send</button>
                </div>
            );
        }
    }
}
export default VengerTable;