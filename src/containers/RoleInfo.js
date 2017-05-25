import React, { Component } from 'react';
import { fetchRoleInfoMandatesIfNeeded } from '../actions/roleInfoMandate';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import skold from '../../public/skold.png';

class RoleInfo extends Component {
  static propTypes = {
    roleinfo: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchRoleInfoMandatesIfNeeded(this.props.match.params.roleid))
  }

  render() {
    const { roleinfo, isFetching /*, lastUpdated*/ } = this.props
    const isEmpty = Object.keys(roleinfo).length === 0
    return (
      <div>
        {isEmpty
          ? (isFetching ? <img className="spin-logo" alt="loading" src={skold}/> : <h2>404.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <p> {JSON.stringify(roleinfo)} </p>
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { roleInfoMandates } = state;
  const {
    isFetching,
    lastUpdated,
    roleinfo
  } = roleInfoMandates || {
    isFetching: true,
    roleinfo: {}
  }

  return {
    roleinfo,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(RoleInfo)
