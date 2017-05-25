import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Link } from 'react-router-dom';

const UserMandateList = ({mandates}) => (
  <table classname="table table-striped">
    <thead>
      <tr>
        <th>Title</th>
        <th>Start</th>
        <th>End</th>
      </tr>
    </thead>
    <tbody>
      {mandates.map((mandate, i) =>
        <tr key={mandate.title}>
          <td>
            <Link to={'/role/'+mandate.Role.identifier}>{mandate.Role.title}</Link>
          </td>
          <td>{moment(mandate.start).format('YYYY-MM-DD')}</td>
          <td>{moment(mandate.end).format('YYYY-MM-DD')}</td>
        </tr>
      )}
    </tbody>
  </table>
)

UserMandateList.propTypes = {
  mandates: PropTypes.array.isRequired
}

export default UserMandateList
