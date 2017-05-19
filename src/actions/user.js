export const REQUEST_USERINFO = 'REQUEST_USERINFO';
export const RECEIVE_USERINFO = 'RECEIVE_USERINFO';
export const INVALIDATE_USERINFO = 'INVALIDATE_USERINFO';


export const requestUserInfo = () => ({
  type: REQUEST_USERINFO
});

export const receiveUserInfo = (json) => ({
  type: RECEIVE_USERINFO,
  info: json,
  receivedAt: Date.now()
});

export const invalidateUserInfo = () => ({
  type: INVALIDATE_USERINFO
})


const fetchUserInfo = (kthid) => dispatch => {
  dispatch(requestUserInfo())
  return fetch(`//localhost:5001/api/user/kthid/`+kthid)
    .then(response => response.json())
    .then(json => dispatch(receiveUserInfo(json)))
}

const shouldFetchUserInfo = (state) => {
  const user = state.user;
  if (!user) {
    return true;
  }
  if (user.isFetching) {
    return false;
  }
  return user.didInvalidate;
}

export const fetchUserInfoIfNeeded = (kthid) => (dispatch, getState) => {
  if (shouldFetchUserInfo(getState())) {
    return dispatch(fetchUserInfo(kthid))
  }
}
