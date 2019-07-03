import React from 'react';
import client from './clients.json';
import style from '../style/Data.css';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        avatar: null,
        firstName: null,
        lastName: null,
        company: null,
        title: null,
        email: null,
        phone: null,
        street:  null,
        city: null,
        zipCode: null,
        country: null
    };
  }


  render(){

    return(
        <div className = 'data'>
              <h3>General</h3>
              <p>FirstName: </p>
              <p>LastName: </p>
              <img src = {client[0]['general']['avatar']}  style = {style} className = 'imgData' />
              <h3>Job</h3>
              <p>Company: </p>
              <p>Title: </p>
              <h3>Contact</h3>
              <p>Email: </p>
              <p>Phone: </p>
              <h3>Address</h3>
              <p>Street: </p>
              <p>City: </p>
              <p>ZipCode: </p>
              <p>Country: </p>
        </div>

    );
  }
}

export default Data;
