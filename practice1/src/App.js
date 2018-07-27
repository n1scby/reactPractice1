import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      displayName: 'Friend',
      background: 'background-default'

    }

  }

  updateName = (event) => {
    this.setState({name: event.target.value});
  }


// This works too.  
//   submitName = (event) => {
//     this.setState((prevState) => ({
//     displayName: prevState.name  
//   }));
//     event.preventDefault();
// }


submitName = (event) => {
  this.setState({
    displayName: this.state.name,
    name: ''
  });
  
  event.preventDefault();
  
}

colorChange = (e) => {
  this.setState({
    background: e.target.value
  });
}

  render() {
    return (
      <div className={this.state.background}>
      <div className="App">
        <header className="App-header">         
          <h1 className="App-title">Welcome</h1>
          <div>
            <form>
              <input type="text" placeholder="Name" onChange={this.updateName} value={this.state.name} />
              <button onClick={this.submitName}>Submit</button>
              </form>
            </div>
        </header>
        <div id="welcome">
          <Welcome name={this.state.displayName} />
          <div>
            <form>
              <label>Pick a Background Color </label>
              <select onChange={this.colorChange}>
                <option value="background-yellow">Yellow</option>
                <option value="background-blue">Light Blue</option>
                <option value="background-gray">Gray</option>
                <option value="background-pink">Pink</option>
                <option value="background-orange">Orange</option>
              </select>
            </form>
          </div>
        </div>

      </div>
      </div>
    );
  }
}


const Welcome = (props) => (
  <div>
    <h2> Welcome {props.name} ! </h2>
  </div>
)

export default App;
