import React from 'react';
import PropTypes from 'prop-types';

import RoleMandateList from './RoleMandateList';

const RoleInfo = ({roleinfo}) => (
  <div className="card">
    <div className="card-block">
        <h1 className="card-title">
          {roleinfo.role.title}
          <small className="pull-right text-muted">{roleinfo.role.Group.name}</small>
        </h1>
        <h3 className="sub-title">{roleinfo.role.email}</h3>
    </div>
    <p className="card-text">{roleinfo.role.description}</p>
    <RoleMandateList mandates={roleinfo.mandates} />
  </div>
)

RoleInfo.propTypes = {
  roleinfo: PropTypes.object.isRequired
}

export default RoleInfo
