export const REQUEST_LOGININFO = 'REQUEST_LOGININFO';
export const RECEIVE_LOGININFO = 'RECEIVE_LOGININFO';
export const LOGOUT = 'LOGOUT';


export const requestLoginInfo = (token) => ({
  type: REQUEST_LOGININFO,
  token: token

});

export const receiveLoginInfo = (json) => ({
  type: RECEIVE_LOGININFO,
  info: json
});

export const logout = () => ({
  type: LOGOUT,
  token: ""
})


const fetchLoginInfo = (token) => dispatch => {
  dispatch(requestLoginInfo(token))
  return fetch(`//localhost:5001/login/dauth/`+token)
    .then(response => response.json())
    .then(json => dispatch(receiveLoginInfo(json)))
}

const shouldFetchLoginInfo = (state) => {
  const login = state.login;
  if (!login) {
    return true;
  }
  if (login.isFetching) {
    return false;
  }
  return Object.keys(login.info).length === 0;
}

export const fetchLoginInfoIfNeeded = (token) => (dispatch, getState) => {
  if (shouldFetchLoginInfo(getState())) {
    return dispatch(fetchLoginInfo(token))
  }
}
