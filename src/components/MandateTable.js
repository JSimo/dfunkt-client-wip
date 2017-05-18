import React from 'react';
import PropTypes from 'prop-types';

import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';

const active = m => m.active; //to filter out all not active posts.

const MandateTable = ({mandates}) => (
  <DataTable plain>
    <TableHeader>
      <TableRow>
        <TableColumn>Title</TableColumn>
        <TableColumn>Grupp</TableColumn>
        <TableColumn>E-post</TableColumn>
        <TableColumn>Nuvarande innehavare</TableColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {mandates.filter(active).map((mandate, i) =>
        <TableRow key={i}>
          <TableColumn>{mandate.title}</TableColumn>
          <TableColumn>{mandate.Group.name}</TableColumn>
          <TableColumn>{mandate.email}</TableColumn>
          <TableColumn>{mandate.Mandates.map((m, j) =>
              <p key={i+''+j}> {m.User.first_name + ' ' +  m.User.last_name} </p>
            )}</TableColumn>
        </TableRow>
      )}
    </TableBody>
  </DataTable>
)

MandateTable.propTypes = {
  mandates: PropTypes.array.isRequired
}

export default MandateTable
