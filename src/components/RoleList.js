import React from 'react';
import PropTypes from 'prop-types';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';

import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';


const drek = r => r.Group.identifier === 'drek';
const dfunk = r => r.Group.identifier === 'dfunk';
const proj = r => r.Group.identifier === 'proj';
const active = r => r.active === true;

const RoleList = ({roles}) => (
  <div className="md-grid">
    <Card className="md-cell md-paper md-paper--1">
      <CardTitle title="D-rektoratet" subtitle="Datasektionens styrelse" />
      <CardText>
        <List>
          {roles.filter(drek).filter(active).map((role, i) =>
            <ListItem
              key={role.title}
              primaryText={role.title}
              secondaryText={role.email}
            />
          )}
        </List>
      </CardText>
    </Card>
    <Card className="md-cell md-paper md-paper--1">
      <CardTitle title="dfunk" subtitle="Datasektionens funktionärer" />
      <CardText>
        <List>
          {roles.filter(dfunk).filter(active).map((role, i) =>
            <ListItem
              key={role.title}
              primaryText={role.title}
              secondaryText={role.email}
            />
          )}
        </List>
      </CardText>
    </Card>
    <Card className="md-cell md-paper md-paper--1">
      <CardTitle title="Projektledare" subtitle="Datasektionens projektledare" />
      <CardText>
        <List>
          {roles.filter(proj).filter(active).map((role, i) =>
            <ListItem
              key={role.title}
              primaryText={role.title}
              secondaryText={role.email}
            />
          )}
        </List>
      </CardText>
    </Card>
    <Card className="md-cell md-paper md-paper--1">
      <CardTitle title="Gammalt" subtitle="Inactive and old posts" />
      <CardText>
        <List>
          {roles.filter((r) => !active(r)).map((role, i) =>
            <ListItem
              key={role.title}
              primaryText={role.title}
              secondaryText={role.email}
            />
          )}
        </List>
      </CardText>
    </Card>
  </div>
)

RoleList.propTypes = {
  roles: PropTypes.array.isRequired
}

export default RoleList
