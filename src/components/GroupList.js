import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GroupList = ({title, description, roles}) => (
  <div className="card">
    <div className="card-block">
      <h2 className="card-title">{title}</h2>
      <h4 className="card-subtitle mb-2 text-muted">{description}</h4>
      <ul className="list-group list-group-flush">
        {roles.map((role, i) =>
          <Link className="list-group-item" to={'/role/'+role.identifier} key={role.title}>
            <div className="">
              {role.title}
            </div>
          </Link>
        )}
      </ul>
    </div>
  </div>
)

GroupList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  roles: PropTypes.array.isRequired
}

export default GroupList;
