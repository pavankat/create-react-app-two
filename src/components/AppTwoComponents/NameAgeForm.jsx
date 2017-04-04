import React, { Component } from 'react';

//This is used in AppTwo.js

class NameAgeForm extends Component {
  render() {
    return (
      <div className="container">
        {/* in normal html the for attribute on a label element refers to the corresponding input element's id. In jsx it's not for, it's htmlFor */}
        <label htmlFor="name">updating this input updates the name in state
          <input type="text"
          id="name"
          onChange={this.props.handleInputChange}
          value={this.props.name}/>
        </label>

        <br /><br />

        <label htmlFor="age">updating this input changes the age in state
          <input type="number"
          id="age"
          onChange={this.props.handleInputChangeAge}
          value={this.props.age}/>
          </label>
      </div>
    );
  }
}

NameAgeForm.propTypes = {
	handleInputChange: React.PropTypes.func.isRequired,
  handleInputChangeAge: React.PropTypes.func.isRequired,
	name: React.PropTypes.string.isRequired,
  age: React.PropTypes.number.isRequired,
}

export default NameAgeForm;
