import {
  REQUEST_USERINFO, RECEIVE_USERINFO,
  INVALIDATE_USERINFO
} from '../actions/user'

const userInfo = (state = {
  isFetching: false,
  didInvalidate: false,
  info: {}
}, action) => {
  switch (action.type) {
    case INVALIDATE_USERINFO:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_USERINFO:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_USERINFO:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        info: action.info,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

export default userInfo;
