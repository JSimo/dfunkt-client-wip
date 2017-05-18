import { combineReducers } from 'redux'
//import todos from './todos'
import {
  REQUEST_MANDATES, RECEIVE_MANDATES,
  INVALIDATE_MANDATES
} from '../actions'

const mandateList = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_MANDATES:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_MANDATES:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_MANDATES:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.mandates,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const dfunktApp = combineReducers({
  mandateList
})

export default dfunktApp
