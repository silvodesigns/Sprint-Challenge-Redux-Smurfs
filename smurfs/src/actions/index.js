/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

export const FETCH_SMURF_START ='FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS ='FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL ='FETCH_SMURF_FAIL';
export const FETCH_SMURF_POST ='FETCH_SMURF_POST';

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
