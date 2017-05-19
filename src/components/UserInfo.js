import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
//import CardActions from 'react-md/lib/Cards/CardActions';

import UserMandateList from './UserMandateList';

const UserInfo = ({info}) => (
  <Card className="user-card">
    <CardTitle title={info.user.first_name + ' ' + info.user.last_name} subtitle={info.user.kthid + '@kth.se'} />
    <CardText className="info-block">
      <UserMandateList mandates={info.mandates} />
    </CardText>
  </Card>
)


UserInfo.propTypes = {
  info: PropTypes.object.isRequired
}

export default UserInfo
