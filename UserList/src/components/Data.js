import React from 'react';
import style from '../style/Data.css';

class Data extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.firstName !== null) {
      return (
          <div className='data'>
            <h3>General</h3>
            <p>FirstName: {this.props.firstName} </p>
            <p>LastName: {this.props.lastName}</p>
            <img src={this.props.avatar} style={style} className='imgData'/>
            <h3>Job</h3>
            <p>Company: {this.props.company}</p>
            <p>Title: {this.props.title}</p>
            <h3>Contact</h3>
            <p>Email: {this.props.email}</p>
            <p>Phone: {this.props.phone}</p>
            <h3>Address</h3>
            <p>Street: {this.props.street}</p>
            <p>City: {this.props.city}</p>
            <p>ZipCode: {this.props.zipCode}</p>
            <p>Country: {this.props.country}</p>
          </div>

      );
    }
    else {
      return(
          <div className='data'>
            <h1>Choose person!</h1>
          </div>
      )
    }
  }
}

export default Data;
