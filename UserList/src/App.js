import React from 'react';
import List from './components/List';
import UserData from './components/Data';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        id: undefined
    };
    this.Check = this.Check.bind(this);
  }

  Check(event) {
      event.preventDefault();
      console.log(event.target.id);
      this.setState({
          id: event.target.id
      });
  }

render(){
  return (
    <div className="App">
        <List check = {this.Check}/>
        <UserData/>
    </div>
  );
}
}

export default App;
