import React from 'react';
import client from './clients.json';


class List extends React.Component {
  // constructor() {
  //
  // }
   AddList(){
     let MassList = [];
    for (var key in client) {
         MassList.push(<li>
           <p>FirstName:  {client[key]['general']['firstName']}</p>
           <p>LastName:  {client[key]['general']['lastName']}</p>
           <img src = {client[key]['general']['avatar']} />
          </li>)
      }
      return MassList;
  }

  render(){

    return(
        <div>

          <ul>
          { this.AddList()}
          </ul>

        </div>

    )
  }
}

export default List;
