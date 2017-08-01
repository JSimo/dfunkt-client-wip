import {
  REQUEST_LOGININFO, RECEIVE_LOGININFO,
  LOGOUT
} from '../actions/login'

const login = (state = {
  isFetching: false,
  info: {},
  token: ""
}, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        info: {},
        token: action.token
      }
    case REQUEST_LOGININFO:
      return {
        ...state,
        isFetching: true,
        token: action.token
      }
    case RECEIVE_LOGININFO:
      return {
        ...state,
        isFetching: false,
        info: action.info
      }
    default:
      return state
  }
}

export default login;
