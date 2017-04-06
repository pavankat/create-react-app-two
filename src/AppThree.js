import React, { Component } from 'react';
import './App.css';
import NameNameChangeCountForm from './components/AppThreeComponents/NameNameChangeCountForm';

class AppThree extends Component {
  state = {
    name : "Meeses",
    nameChangeCount: 0
  }

  //the name of this function could have been anything
  handleInputChangeCount = (evt) => {
    evt.preventDefault()

    let count;

    //the else forces count to be 0 if you try to delete it on the page. 
    //if curious, remove the else here and delete the 0 and see what happens
    if (evt.target.value) count = parseInt(evt.target.value)
    else count = 0;

    this.setState({
      nameChangeCount : count
    })
  }

  handleInputChange = (evt) => {
    evt.preventDefault()

    /*
      //if we did the following in this comment block then 
        //it would be a bad practice 
        //because we're updating the state
        //it looks like we're not, but we are because we're doing it by reference
      let count = this.state.nameChangeCount;
      count++;
    */
    let count = this.state.nameChangeCount + 1; //we are not editing nameChangeCount directly
    
    //here we can update the state
    this.setState({
      nameChangeCount : count,
      name : evt.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is Appthree.js</h1>

        <br />

        <p>the current name in state:</p>

        {this.state.name}

        <br />

        {this.state.name.split("").reverse().join("")}

        <br /><br />

        <p>the current nameChangeCount in state:</p>
        {this.state.nameChangeCount}

        <br /><br />

        <NameNameChangeCountForm 
          name={this.state.name}
          handleInputChange={this.handleInputChange} 
          handleInputChangeCount={this.handleInputChangeCount} 
          nameChangeCount={this.state.nameChangeCount} />
        
      </div>
    );
  }
}

export default AppThree;
