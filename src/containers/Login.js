import React, { Component } from 'react';
import { fetchLoginInfoIfNeeded } from '../actions/login';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import skold from '../../public/skold.png';

class Login extends Component {
  static propTypes = {
    info: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchLoginInfoIfNeeded(this.props.match.params.token));
  }

  componentDidUpdate(prevProps, prevState) {
    const { info, isFetching} = this.props;
    if (isFetching) return;
    if (info && info.isloggedin === false) {
      //do redirect to login page.
    }
  }


  render() {
    const { info, isFetching} = this.props;
    const isEmpty = Object.keys(info).length === 0;
    return (
      <div>
        {isEmpty
          ? (isFetching ? <img className="spin-logo" alt="loading" src={skold}/> : <h2>404.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <h1>{this.props.match.params.token}</h1>
              <p> isloggedin: {String(info.isloggedin)} </p>
              <p> user: {info.user}</p>
              <p> permissions: {info.permissions} </p>
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { login } = state;
  const {
    isFetching,
    info,
    token
  } = login || {
    isFetching: true,
    info: {},
    token: ""
  }

  return {
    info,
    isFetching,
    token
  }
}

export default connect(mapStateToProps)(Login)
