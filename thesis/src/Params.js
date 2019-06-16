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
             <form onSubmit={this.props.method}>
                <span>
                    Введите размер матрицы
                    <input type="text" name={'M'} onChange={this.InputM}/>
                    <input type="text" name={'N'}  onChange={this.InputN} />
                </span>
                 <span>Выбирете метод решения</span>
                 <label>
                     <select value={this.state.value} name={'metod'} onChange={this.Metod}>
                         <option value="Venger">Венгерский Метод</option>
                         <option value="Poten">Метод Потенциалов</option>
                     </select>
                 </label>
                <input type="submit" value="Отправить" />
            </form>


        );
    }
}
export default Params;
