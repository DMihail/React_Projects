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
              <img src={this.props.avatar} style={style} class="pull-left"/>
             <div class="text-left">
                 <h5>General</h5>
            <p>Name: {this.props.firstName}</p>
            <p>LastName: {this.props.lastName}</p>
            <h5>Job</h5>
            <p>Company: {this.props.company}</p>
            <p>Title: {this.props.title}</p>
            <h5>Contact</h5>
            <p>Email: {this.props.email}</p>
            <p>Phone: {this.props.phone}</p>
            <h5>Address</h5>
            <p>Street: {this.props.street}</p>
            <p>City: {this.props.city}</p>
            <p>ZipCode: {this.props.zipCode}</p>
            <p>Country: {this.props.country}</p>
              </div>
          </div>

      );
    }
    else {
      return(
          <div className='null'>
            <h1>Choose person!</h1>
          </div>
      )
    }
  }
}

export default Data;
