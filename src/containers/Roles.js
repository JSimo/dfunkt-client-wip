import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchRolesIfNeeded } from '../actions/role';
import { connect } from 'react-redux'
import RoleList from '../components/RoleList';

import skold from '../../public/skold.png';


class Roles extends Component {
  static propTypes = {
    roles: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchRolesIfNeeded())
  }

  render() {
    const { roles, isFetching /*, lastUpdated*/ } = this.props
    const isEmpty = roles.length === 0
    return (
      <div className="roles">
        <h1> Roles </h1>
        {isEmpty
          ? (isFetching ? <img className="spin-logo" alt="loading" src={skold}/> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <RoleList roles={roles} />
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { roleList } = state;
  const {
    isFetching,
    lastUpdated,
    roles
  } = roleList || {
    isFetching: true,
    roles: []
  }

  return {
    roles,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(Roles)
