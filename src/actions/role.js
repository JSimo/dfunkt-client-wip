export const REQUEST_ROLES = 'REQUEST_ROLES';
export const RECEIVE_ROLES = 'RECEIVE_ROLES';
export const INVALIDATE_ROLES = 'INVALIDATE_ROLES';


export const requestRoles = () => ({
  type: REQUEST_ROLES
});

export const receiveRoles = (json) => ({
  type: RECEIVE_ROLES,
  roles: json,
  receivedAt: Date.now()
});

export const invalidateRoles = () => ({
  type: INVALIDATE_ROLES
})


const fetchRoles= () => dispatch => {
  dispatch(requestRoles())
  return fetch(`//localhost:5001/api/roles`)
    .then(response => response.json())
    .then(json => dispatch(receiveRoles(json)))
}

const shouldFetchRoles = (state) => {
  const roles = state.roles;
  if (!roles) {
    return true;
  }
  if (roles.isFetching) {
    return false;
  }
  return roles.didInvalidate;
}

export const fetchRolesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchRoles(getState())) {
    return dispatch(fetchRoles())
  }
}
