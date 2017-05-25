import React from 'react';
import PropTypes from 'prop-types';
import GroupList from './GroupList';

const drek = r => r.Group.identifier === 'drek';
const dfunk = r => r.Group.identifier === 'dfunk';
const proj = r => r.Group.identifier === 'proj';
const active = r => r.active === true;


const RoleList = ({roles}) => (
  <div className="container">
    <div className="row">
      <div className="col-sm-3">
        <GroupList
          title="D-rektoratet"
          description="Datasektionens styrelse"
          roles={roles.filter(active).filter(drek)} />
      </div>
      <div className="col-sm-3">
        <GroupList
          title="Dfunkt"
          description="Datasektionens funktionärer"
          roles={roles.filter(active).filter(dfunk)} />
      </div>
      <div className="col-sm-3">
        <GroupList
          title="Projektledare"
          description="Datasektionens projektledare"
          roles={roles.filter(active).filter(proj)} />
      </div>
      <div className="col-sm-3">
        <GroupList
          title="Inaktiva"
          description="Gamla poster på sektionen"
          roles={roles.filter((r) => !active(r))} />
      </div>
    </div>
  </div>
)

RoleList.propTypes = {
  roles: PropTypes.array.isRequired
}

export default RoleList
