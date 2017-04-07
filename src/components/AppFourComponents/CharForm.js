import React, { Component } from 'react';

const CharForm = (props) => (
  <form onSubmit={props.handleCharSubmit}>
    <input type="text" 
    onChange={props.handleCharInputChange}
    value={props.charName}
    placeholder="insert cat here" />
  </form>)


CharForm.propTypes = {
  handleCharInputChange: React.PropTypes.func.isRequired,
  handleCharSubmit: React.PropTypes.func.isRequired,
  charName: React.PropTypes.string.isRequired
}

export default CharForm;
