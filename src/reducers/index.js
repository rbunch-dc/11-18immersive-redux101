// This is our master reducer.
// This is our state.
// It imports all of the little reducers

// MasterReducer manifesto: I, the master reducer, neither know
// nor give a rip about React.
// I am like Lichtenstien, independent of your silly empires. 
// I just care about redux.

import { combineReducers } from 'redux';

// We need a reducer to give to the master reducer
import StudentReducer from './StudentReducer';

// Build the root reducer with combineReducers.
// we got combineReducers from redux
// conbineReducers takes 1 arg: an object
// properties of whatever the state should be called
// value of the reducer
const rootReducer = combineReducers({
    // the name of the state will be the prop used by React
    // the value will be the reducer file
    students: StudentReducer
})
export default rootReducer;