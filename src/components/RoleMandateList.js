import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Link } from 'react-router-dom';

const RoleMandateList = ({mandates}) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Start</th>
        <th>End</th>
      </tr>
    </thead>
    <tbody>
      {mandates.map((mandate, i) =>
        <tr key={mandate.title + mandate.start + mandate.User.kthid}>
          <td>
            <Link to={'/user/'+mandate.User.kthid}>{mandate.User.first_name + ' ' + mandate.User.last_name}</Link>
          </td>
          <td>{moment(mandate.start).format('YYYY-MM-DD')}</td>
          <td>{moment(mandate.end).format('YYYY-MM-DD')}</td>
        </tr>
      )}
    </tbody>
  </table>
)

RoleMandateList.propTypes = {
  mandates: PropTypes.array.isRequired
}

export default RoleMandateList;
