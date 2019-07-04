import React from 'react';
import List from './components/List';
import UserData from './components/Data';
import client from './components/clients.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: undefined,
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
    this.Check = this.Check.bind(this);
  }

  Check(event) {
      event.preventDefault();
          for (var key in client) {
           if (client[key]['general']['lastName'] === event.target.id) {
                console.log(client[key]['general']['lastName']);
                this.setState({
                    id: event.target.id,
                      avatar: client[key]['general']['avatar'],
                      firstName: client[key]['general']['firstName'],
                      lastName: client[key]['general']['lastName'],
                      company: client[key]['job']['company'],
                      title: client[key]['job']['title'],
                      email: client[key]['contact']['email'],
                      phone: client[key]['contact']['phone'],
                      street:  client[key]['address']['street'],
                      city: client[key]['address']['city'],
                      zipCode: client[key]['address']['zipCode'],
                      country: client[key]['address']['country']
                });
             }
         }

  }

render(){
  return (
    <div className="App">
        <List check = {this.Check}/>
        <UserData
          avatar = {this.state.avatar}
          firstName = {this.state.firstName}
          lastName = {this.state.lastName}
          company = {this.state.company}
          title = {this.state.title}
          email = {this.state.email}
          phone = {this.state.phone}
          street = {this.state.street}
          city = {this.state.city}
          zipCode = {this.state.zipCode}
          country = {this.state.country}
            />
    </div>
  );
}
}

export default App;
