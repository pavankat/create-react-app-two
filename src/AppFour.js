import React, { Component } from 'react';
import './App.css';
import CatForm from './components/AppFourComponents/CatForm';
import Cat from './components/AppFourComponents/Cat';

class AppFour extends Component {
  state = {
    catName : "",
    robsCats : ["Walter White", "Saul Goodman", "Gus Fring", "Jesse Pinkman", "Skyler White", "Hank Schrader", "Walter White Jr.", "Mike Ehrmantraut", "Tuco Salamanca", "Jane Margolis", "Marie Schrader", "Lydia Rodarte-Quayle", "Joey"]
  }

  handleGiveCatAway = (evt) => {
    evt.preventDefault();

    let catid = evt.target.getAttribute('data-catid');
    let robsCats = this.state.robsCats.filter((cat, index) => index != catid); //this does not modify robsCats in the state - it creates a new array of all the cats whose indices are not equal to the catid that was removed
    this.setState({
      robsCats
    }); 

    /* 
      in class JavaScript (ES5)

      it would be:
      this.setState({
        robsCats : robsCats
      }); 

    */
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    
    let robsCats = this.state.robsCats;
    robsCats.push(this.state.catName);
    let catName = "";

    this.setState({
      catName,
      robsCats
    });
  }

  handleInputChange = (evt) => {
    evt.preventDefault();

    this.setState({
      catName: evt.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is AppFour.js</h1>
        
        <br /><br />

        <h2>{this.state.catName}</h2>

        {/* must make a catid prop if we want to use it inside the Cat component because we don't have access to key inside of the component. We do have to set key because react requires it when you are looping or mapping */}
        {this.state.robsCats.map((cat, index) => <Cat 
          key={index} 
          catid={index}
          catName={cat} 
          handleGiveCatAway={this.handleGiveCatAway}/>)}

        <br /><br />

        <CatForm 
          catName={this.state.catName}
          handleSubmit={this.handleSubmit} 
          handleInputChange={this.handleInputChange} />
        
      </div>
    );
  }
}

export default AppFour;
