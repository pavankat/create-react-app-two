import React, { Component } from 'react';
import './App.css';
import NameAgeForm from './components/AppTwoComponents/NameAgeForm';

class AppTwo extends Component {
  state = {
    name : "Tyler",
    age : 25
  }

  //two functions to handle input change instead of one
    //in create-react-app-three we learn to use one handleInputChange function
  handleInputChange = (evt) => {
    evt.preventDefault()
    
    this.setState({
      name : evt.target.value
    })
  }

  handleInputChangeAge = (evt) => {
    evt.preventDefault()
    
    this.setState({
      age : parseInt(evt.target.value)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is AppTwo.js</h1>
        
        <p>Name: {this.state.name}</p>

        <p>Age: {this.state.age}</p>

        <br /><br />

        <NameAgeForm 
          name={this.state.name}
          handleInputChange={this.handleInputChange} 
          age={this.state.age}
          handleInputChangeAge={this.handleInputChangeAge}/>
        
      </div>
    );
  }
}

export default AppTwo;
