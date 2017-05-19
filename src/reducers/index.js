import { combineReducers } from 'redux';
import mandateList from './mandateList';
import userInfo from './userInfo';
import roleList from './roleList';

const dfunktApp = combineReducers({
  mandateList,
  userInfo,
  roleList
})

export default dfunktApp
