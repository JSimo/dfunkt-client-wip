import { combineReducers } from 'redux';
import mandateList from './mandateList';
import userInfo from './userInfo';
import roleList from './roleList';
import roleInfoMandates from './roleInfoMandates';
import login from './login';

const dfunktApp = combineReducers({
  mandateList,
  userInfo,
  roleList,
  roleInfoMandates,
  login
})

export default dfunktApp
