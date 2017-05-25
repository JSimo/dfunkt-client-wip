import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const active = m => m.active; //to filter out all not active posts.

const MandateTable = ({mandates}) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Title</th>
        <th>Nuvarande innehavare</th>
        <th>E-post</th>
        <th>Grupp</th>
      </tr>
    </thead>
    <tbody>
      {mandates.filter(active).map((mandate, i) =>
        <tr key={mandate.title}>
          <td>
            <Link to={'/role/'+mandate.identifier}>{mandate.title} </Link>
          </td>
          <td>{mandate.Mandates.map((m, j) =>
              <p key={mandate.title+m.User.kthid}><Link to={"/user/" + m.User.kthid}> {m.User.first_name + ' ' +  m.User.last_name} </Link></p>
            )}</td>
          <td>{mandate.email}</td>
          <td>{mandate.Group.name}</td>
        </tr>
      )}
    </tbody>
  </table>
)

MandateTable.propTypes = {
  mandates: PropTypes.array.isRequired
}

export default MandateTable
