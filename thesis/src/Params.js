import React from 'react';

class Params extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            M: undefined,
            N: undefined
        };
       this.InputN =   this.InputN.bind(this);
       this.InputM =   this.InputM.bind(this);
        this.Submit = this.Submit.bind(this);
    }

    InputN(event) {
        this.setState({N: event.target.value});
    }
    InputM(event) {
        this.setState({M: event.target.value});
    }

    Submit(event) {

        console.log('N: ' + this.state.N + ', ' + 'M: ' + this.state.M);
        this.CreateHeaderTable(this.state.N);
        this.CreateRow(this.state.N, this.state.M);
        event.preventDefault();
          }
    header = [];
    row = [];

    CreateHeaderTable(m) {
        for (let i = 0; i < m; i++) {
            if (i === 0) {
                this.header.push(<th scope='coll'>A/B</th>);
            } else {
                this.header.push(<th scope='coll'>A{i}</th>);
            }
        }
    }


    CreateRow(m) {
        for (let i = 1; i < m + 1; i++) {
            this.row.push(<tr scope='row'>{this.CreateColl(m, i)}</tr>)
        }
    }

    CreateColl(n, i) {
        let coll = [];
        for (let j = 1; j < n + 1; j++) {
            coll.push(<td> <input type={'text'}/></td>)
        }
        return coll;
    }
    render() {
        return (
            <div>
            <div>
            <form onSubmit={this.Submit}>
                <label>
                    Введите размер матрицы
                    <input type="text" name={'M'} onChange={this.InputM}/>
                    <input type="text" name={'N'}  onChange={this.InputN} />
                </label>
                <input type="submit" value="Отправить" />
            </form>
              </div>
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
                    <button type="button" className="btn btn-primary">Send</button>
                </div>

            </div>
        );
    }
}
export default Params;
