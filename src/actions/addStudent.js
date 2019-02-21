// an action exports a function.
// That function, must instelf, return an object
// That object must have a prop of 'type'

function addStudent(studentName){
    console.log("Add student action was called...");
    return {
        type: 'ADD_STUDENT',
        payload: studentName,
    }
}

export default addStudent;