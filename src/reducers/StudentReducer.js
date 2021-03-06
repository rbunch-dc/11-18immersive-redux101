// Reducers are functions that return a peice of state
const students = [
    'Stanley',
    'Kyle',
    'Rob',
    'Ron',
    'JR',
    'Matt'
];
// All reducer functions have 2 params:
// 1. Current state
// 1b. Usually, tou will want to provide a default state
// 2. Info that came from the action

export default function(state = students, action){
    console.log("The dispatcher just sent me something");
    console.log(action);
    if(action.type === 'ADD_STUDENT'){
        console.log("Changing studnet reducer")
        // This means i care about this action. Update.
        let newStudents = state.slice();
        newStudents.push(action.payload)
        return newStudents;
    }else{
        console.log("sending old state")
        return state;
    }
}
