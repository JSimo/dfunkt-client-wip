import {
  REQUEST_ROLEINFOMANDATES, RECEIVE_ROLEINFOMANDATES,
  INVALIDATE_ROLEINFOMANDATES
} from '../actions/roleInfoMandate'

const roleInfoMandates = (state = {
  isFetching: false,
  didInvalidate: false,
  roleinfo: {}
}, action) => {
  switch (action.type) {
    case INVALIDATE_ROLEINFOMANDATES:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_ROLEINFOMANDATES:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_ROLEINFOMANDATES:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        roleinfo: action.roleinfo,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

export default roleInfoMandates;
