import React, { Component } from 'react';

//This is used in AppThree.js

class NameNameChangeCountForm extends Component {
  render() {
    return (
      <div className="container">
        <label htmlFor="name">updating this input updates the name in state and increments the nameChangeCount in state</label>
        <input type="text"
          id="name"
          onChange={this.props.handleInputChange}
          value={this.props.name}/>
        
        <br /><br />
        
        <label htmlFor="name">updating this input changes the nameChangeCount in state</label>
        <input type="number"
          id="number"
          onChange={this.props.handleInputChangeCount}
          value={this.props.nameChangeCount}/>
          
      </div>
    );
  }
}

NameNameChangeCountForm.propTypes = {
	handleInputChange: React.PropTypes.func.isRequired,
  handleInputChangeCount: React.PropTypes.func.isRequired,
	name: React.PropTypes.string.isRequired,
  nameChangeCount: React.PropTypes.number.isRequired,
}

export default NameNameChangeCountForm;
