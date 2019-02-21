import React, { Component } from 'react';

// we would like to inform this component from redux.
// to do that we need some glue, This container needs to 
// know about the store so it can use it's state, and 
// update if needed. To accomplish this, we use the connect
// method from react-redux. This is our glue.
import { connect } from 'react-redux'

// we need bindActionCreators from Redux, so that
// we can get the actions to dispatch to the reducers
import { bindActionCreators } from 'redux';

import addStudent from '../actions/addStudent';

class Student extends Component{

    addNewStudent = ()=>{
        const name = document.getElementById('student-name').value;
        this.props.addStudent(name);
    }

    render(){
        console.log(this.props);
        const students = this.props.rightSideOfRoom.map((student)=>{
            return(<li>{student}</li>)
        })
        console.log(this.props);
        return(
            <div>
                <h1>Students!</h1>
                <input type="text" id="student-name" placeholder="Student Name"/>
                <button onClick={this.addNewStudent}>Add Student</button>
                {students}
            </div>
        )
    }
}

// we need a function to map the redux state 
// to this components props. Redux state
// always comes in as props
function mapStateToProps(state){
// the state parameter in mapStateToProps IS THE ROOT REDUCER
    // this function returns an object
    // property will be props in THIS COMPONENT
    // value will be the peice of state in the reducer
    return {
        rightSideOfRoom: state.students
    }
}

function mapDispatchToProps(dispatch){
	// bindActionCreators takes an object as first param:
	// property is the local prop name (this.props.aaaaa)
	// value is the callback (the action file.js)
    // 2nd param is teh dispatcher
    return bindActionCreators(
        {
            addStudent: addStudent
        }, dispatch
    )
}
console.log(connect);

// export default Student;
export default connect(mapStateToProps,mapDispatchToProps)(Student);