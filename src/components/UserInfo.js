import React from 'react';
import PropTypes from 'prop-types';

import UserMandateList from './UserMandateList';

const UserInfo = ({info}) => (
  <div className="card">
    <div className="card-block">
      <h1 className="card-title">{info.user.first_name + ' ' + info.user.last_name}</h1>
      <h3 className="card-subtitle mb-2 text-muted">{info.user.kthid + '@kth.se'}</h3>
    </div>
    <UserMandateList mandates={info.mandates} />
  </div>
)


UserInfo.propTypes = {
  info: PropTypes.object.isRequired
}

export default UserInfo
