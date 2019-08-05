/*
  Be sure to import in all of the action types from `../actions`
*/

import { FETCH_SMURF_START } from  '../actions';
import { FETCH_SMURF_FAIL } from  '../actions';
import { FETCH_SMURF_SUCCESS } from  '../actions';


import { POST_SMURF } from  '../actions';
import { POST_SMURF_FAIL } from  '../actions';
import { POST_SMURF_SUCCESS } from  '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const reducer = (state = initialState, action)  => {

  

  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ""
      };
      case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        error: "",
        smurfs: [...state.smurfs, ...action.payload]

      };
      case FETCH_SMURF_FAIL:
      return {
        ...state,
        fetchingSmurfs:false ,
        error: action.payload
      };
      case POST_SMURF:
      return {
        ...state,
        addingSmurf: true,
        error: ""
      };
      case POST_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        error: "",
        smurfs: [ ...action.payload]
      };
      case POST_SMURF_FAIL:
      return {
        ...state,
        addingSmurf:false ,
        error: action.payload
      };
    default:
      return state;
  }

}


