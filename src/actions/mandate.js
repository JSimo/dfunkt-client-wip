export const REQUEST_MANDATES = 'REQUEST_MANDATES';
export const RECEIVE_MANDATES = 'RECEIVE_MANDATES';
export const INVALIDATE_MANDATES = 'INVALIDATE_MANDATES';


export const requestMandates = () => ({
  type: REQUEST_MANDATES
});

export const receiveMandates = (json) => ({
  type: RECEIVE_MANDATES,
  mandates: json, //json.data.children.map(child => child.data),
  receivedAt: Date.now()
});

export const invalidateMandates = () => ({
  type: INVALIDATE_MANDATES
})


const fetchMandates = () => dispatch => {
  dispatch(requestMandates())
  return fetch(`//localhost:5001/api/roles/all/current`)
    .then(response => response.json())
    .then(json => dispatch(receiveMandates(json)))
}

const shouldFetchMandates = (state) => {
  const mandates = state.mandates;
  if (!mandates) {
    return true;
  }
  if (mandates.isFetching) {
    return false;
  }
  return mandates.didInvalidate;
}

export const fetchMandatesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchMandates(getState())) {
    return dispatch(fetchMandates())
  }
}
