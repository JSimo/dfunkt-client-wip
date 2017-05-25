export const REQUEST_ROLEINFOMANDATES = 'REQUEST_ROLEINFOMANDATES';
export const RECEIVE_ROLEINFOMANDATES = 'RECEIVE_ROLEINFOMANDATES';
export const INVALIDATE_ROLEINFOMANDATES = 'INVALIDATE_ROLEINFOMANDATES';


export const requestRoleInfoMandates = () => ({
  type: REQUEST_ROLEINFOMANDATES
});

export const receiveRoleInfoMandates = (json) => ({
  type: RECEIVE_ROLEINFOMANDATES,
  roleinfo: json,
  receivedAt: Date.now()
});

export const invalidateRoleInfoMandates = () => ({
  type: INVALIDATE_ROLEINFOMANDATES
});

const fetchRoleInfoMandates= (identifier) => dispatch => {
  dispatch(requestRoleInfoMandates())
  return fetch(`//localhost:5001/api/role/` + identifier)
    .then(response => response.json())
    .then(json => dispatch(receiveRoleInfoMandates(json)))
}

const shouldFetchRoleInfoMandates = (state) => {
  const roleinfo = state.roleinfo;
  if (!roleinfo) {
    return true;
  }
  if (roleinfo.isFetching) {
    return false;
  }
  return roleinfo.didInvalidate;
}

export const fetchRoleInfoMandatesIfNeeded = (identifier) => (dispatch, getState) => {
  if (shouldFetchRoleInfoMandates(getState())) {
    return dispatch(fetchRoleInfoMandates(identifier))
  }
}
