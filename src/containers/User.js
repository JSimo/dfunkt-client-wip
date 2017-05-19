import React, { Component } from 'react';
import { fetchUserInfoIfNeeded } from '../actions/user';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import UserInfo from '../components/UserInfo';

import skold from '../../public/skold.png';
import './user.css';

class User extends Component {
  static propTypes = {
    info: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchUserInfoIfNeeded(this.props.match.params.kthid))
  }

  render() {
    const { info, isFetching /*, lastUpdated*/ } = this.props
    const isEmpty = Object.keys(info).length === 0
    return (
      <div>
        {isEmpty
          ? (isFetching ? <img className="spin-logo" alt="loading" src={skold}/> : <h2>404.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <UserInfo info={info} />
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { userInfo } = state;
  const {
    isFetching,
    lastUpdated,
    info
  } = userInfo || {
    isFetching: true,
    info: {}
  }

  return {
    info,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(User)
