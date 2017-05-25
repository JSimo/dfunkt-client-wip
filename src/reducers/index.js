import { combineReducers } from 'redux';
import mandateList from './mandateList';
import userInfo from './userInfo';
import roleList from './roleList';
import roleInfoMandates from './roleInfoMandates';

const dfunktApp = combineReducers({
  mandateList,
  userInfo,
  roleList,
  roleInfoMandates
})

export default dfunktApp
