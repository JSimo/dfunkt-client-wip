import React from 'react';
import PropTypes from 'prop-types';

import UserMandateList from './UserMandateList';

const UserInfo = ({info}) => (
  <div className="card">
    <div className="card-block">
      <h2 className="card-title">{info.user.first_name + ' ' + info.user.last_name}</h2>
      <h4 className="card-subtitle mb-2 text-muted">{info.user.kthid + '@kth.se'}</h4>
    </div>
    <UserMandateList mandates={info.mandates} />
  </div>
)


UserInfo.propTypes = {
  info: PropTypes.object.isRequired
}

export default UserInfo
