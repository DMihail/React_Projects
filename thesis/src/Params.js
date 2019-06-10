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

    render() {
        return (
            <form onSubmit={this.Submit}>
                <label>
                    Введите размер матрицы
                    <input type="text" name={'M'} onChange={this.InputM}/>
                    <input type="text" name={'N'}  onChange={this.InputN} />
                </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}
export default Params;
