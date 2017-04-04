import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name : "pavan and gene",
    age : 29
  }

  handleInputChange = (evt) => {
    evt.preventDefault();

    this.setState({
      name : evt.target.value
    })
  }

  handleInputChangeForAge = (evt) => {
    evt.preventDefault();

    this.setState({
      age : evt.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is App.js</h1>
        {this.state.name} | {this.state.age}
        <br /><br />
        {this.state.name.split("").reverse().join("")}

        {/* need trailing slash in br tag or things will break */}
        <br /><br /> 

        <input type="text"
          onChange={this.handleInputChange}
          value={this.state.name}/>

        <input type="text"
          onChange={this.handleInputChangeForAge}
          value={this.state.age}/>
      </div>
    );
  }
}

export default App;




