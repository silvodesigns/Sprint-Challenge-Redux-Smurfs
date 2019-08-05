/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

export const FETCH_SMURF_START ='FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS ='FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL ='FETCH_SMURF_FAIL';

export const POST_SMURF ='POST_SMURF';
export const POST_SMURF_SUCCESS ='POST_SMURF_SUCCESS';
export const POST_SMURF_FAIL ='POST_SMURF_FAIL';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/


//reducer function
export const getSmurfs = () => dispatch => {
  dispatch({type: FETCH_SMURF_START });
  axios.get('http://localhost:3333/smurfs/')
    .then(res =>
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data})
    )
    .catch(err => dispatch({ type: FETCH_SMURF_FAIL, payload: err}));
};


export const postSmurfs = (newfellow) => dispatch => {
  dispatch({type: POST_SMURF });
  axios.post('http://localhost:3333/smurfs/', newfellow)
    .then(res =>
      dispatch({ type: POST_SMURF_SUCCESS, payload: res.data})
    )
    .catch(err => dispatch({ type: POST_SMURF_FAIL, payload: err}));
};


