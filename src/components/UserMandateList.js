import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';

import { Link } from 'react-router-dom';

const UserMandateList = ({mandates}) => (
  <DataTable plain>
    <TableHeader>
      <TableRow>
        <TableColumn>Title</TableColumn>
        <TableColumn>Start</TableColumn>
        <TableColumn>End</TableColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {mandates.map((mandate, i) =>
        <TableRow key={mandate.title}>
          <TableColumn>
            <Link to={'/role/'+mandate.Role.title}>{mandate.Role.title}</Link>
          </TableColumn>
          <TableColumn>{moment(mandate.start).format('YYYY-MM-DD')}</TableColumn>
          <TableColumn>{moment(mandate.end).format('YYYY-MM-DD')}</TableColumn>
        </TableRow>
      )}
    </TableBody>
  </DataTable>
)

UserMandateList.propTypes = {
  mandates: PropTypes.array.isRequired
}

export default UserMandateList
