import React from 'react';
import client from './clients.json';
import style from '../style/List.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: undefined
    };
    this.Search = this.Search.bind(this);
  }

  Search(event){
  event.preventDefault();
    this.setState({search: event.target.value});
  }

   AddList(){
       let MassList = [];

        if (this.state.search === undefined || this.state.search === null || this.state.search === '') {
            for (let key in client) {
                MassList.push(<li id={client[key]['general']['lastName']} onClick={this.props.check}
                                  class="list-group-item list-group-item-action list-group-item-secondary">
                    <img src={client[key]['general']['avatar']} style={style}/>
                    FirstName: {client[key]['general']['firstName']}
                    LastName: {client[key]['general']['lastName']}
                </li>)
            }
        }
            else {
            for (let key in client) {
                if (~client[key]['general']['firstName'].indexOf(this.state.search) || ~client[key]['general']['lastName'].indexOf(this.state.search) ) {
                    MassList.push(<li id={client[key]['general']['lastName']} onClick={this.props.check}
                                      class="list-group-item list-group-item-action list-group-item-secondary">
                        <img src={client[key]['general']['avatar']} style={style}/>
                        FirstName: {client[key]['general']['firstName']}
                        LastName: {client[key]['general']['lastName']}
                    </li>)
                }
            }
        }
      return MassList;
  }

  render(){
    return(
      <div>
        <input type = 'search' placeholder = 'search' onChange = {this.Search} value={this.state.search}/>
        <div class = 'cont'>
              <ul  class="list-group">
              {this.AddList()}
              </ul>
        </div>
      </div>
    )
  }
}

export default List;
