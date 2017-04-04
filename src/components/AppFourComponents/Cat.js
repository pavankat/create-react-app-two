import React, { Component } from 'react';

class Cat extends Component {
  render() {
    return (
      <div className="container">
        { /* this.props.key */ } {/* Warning: Cat: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. */}
        
        {this.props.catName} <button data-catid={this.props.catid} onClick={this.props.handleGiveCatAway}> give cat away </button>
      </div>
    );
  }
}

Cat.propTypes = {
	catName: React.PropTypes.string.isRequired,
	handleGiveCatAway: React.PropTypes.func.isRequired,
	catid: React.PropTypes.number.isRequired
}

export default Cat;
