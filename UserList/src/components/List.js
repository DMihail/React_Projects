import React from 'react';
import client from './clients.json';
import style from '../style/List.css';

class List extends React.Component {
  // constructor() {
  //
  // }

  Log(event){
  event.preventDefault();
  console.log(event.target.id);
  }
   AddList(e){
     let MassList = [];
    for (var key in client) {
         MassList.push(<li id = {client[key]['general']['lastName']} onClick = {this.props.check} >
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

          <ul>
          {this.AddList()}
          </ul>

        </div>

    )
  }
}

export default List;
