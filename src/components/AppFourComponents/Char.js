import React, { Component } from 'react';

class Char extends Component {
  render() {
    return (
      <div className="container">
        { /* this.props.key */ } {/* Warning: Cat: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. */}
        
        <b>{this.props.character}</b> <button data-charid={this.props.charid} onClick={this.props.removeChar}> remove character </button>
        <br /><br />
      </div>
    );
  }
}

Char.propTypes = {
	character: React.PropTypes.string.isRequired,
}

export default Char;
