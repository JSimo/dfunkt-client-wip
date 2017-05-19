import {
  REQUEST_ROLES, RECEIVE_ROLES,
  INVALIDATE_ROLES
} from '../actions/role'

const roleList = (state = {
  isFetching: false,
  didInvalidate: false,
  roles: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_ROLES:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_ROLES:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_ROLES:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        roles: action.roles,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

export default roleList;
