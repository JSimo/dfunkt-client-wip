import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class User extends Component {
  render() {
    return (
      <h1> {this.props.match.params.kthid} </h1>
    );
  }
}

export default User
