import React from 'react';
import client from './clients.json';
import style from '../style/List.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: undefined
    }
    this.Search = this.Search.bind(this);
  }

  Search(event){
  event.preventDefault();
  console.log(event.target.value);
  }
   AddList(e){
     let MassList = [];
    for (var key in client) {
         MassList.push(<li id = {client[key]['general']['lastName']} onClick = {this.props.check} class="list-group-item list-group-item-action list-group-item-secondary" >
          <img src = {client[key]['general']['avatar']}  style = {style} />
           FirstName:  {client[key]['general']['firstName']}
           LastName:  {client[key]['general']['lastName']}
          </li>)
      }
      return MassList;
  }

  render(){
    return(
      <div>
        <input type = 'search' placeholder = 'search' onChange = {this.Search}/>
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
