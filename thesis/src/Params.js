import React from 'react';

class Params extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            M: undefined,
            N: undefined,
            value: 'Ваш выбор'
        };
       this.InputN =   this.InputN.bind(this);
       this.InputM =   this.InputM.bind(this);
       this.Metod =     this.Metod.bind(this);
    }

    InputN(event) {
        this.setState({N: event.target.value});
    }
    InputM(event) {
        this.setState({M: event.target.value});
    }
    Metod(event){
        event.preventDefault();
        this.setState({value: event.target.value});

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-xl-6">
            < div
        className = "card border-danger" >
            < div
        className = "card-header" >
                <h1 >Введите параметры </h1>
        < /div>
        <div className="card-body">
            <form onSubmit={this.props.method}>
                <span>
                    <h3 class="card-title">Введите размер матрицы </h3>
                    <p>m:   <input type="text" name={'M'} onChange={this.InputM}/></p>
                    <p>n:  <input type="text" name={'N'}  onChange={this.InputN} /></p>
                </span>
                <h3 class="card-title">ВВыбирете метод решения</h3>
                <label>
                    <select value={this.state.value} name={'metod'} onChange={this.Metod}>
                        <option value="Venger">Венгерский Метод</option>
                        <option value="Poten">Метод Потенциалов</option>
                    </select>
                </label>
                <input type="submit" value="Отправить" />
            </form>
        </div>
        </div>
            </div>
                    </div>
                </div>
        );
    }
}
export default Params;
