import { combineReducers } from 'redux';
import mandateList from './mandateList';
import userInfo from './userInfo';

const dfunktApp = combineReducers({
  mandateList,
  userInfo
})

export default dfunktApp
