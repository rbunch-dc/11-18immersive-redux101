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

class Student extends Component{
    render(){
        const students = this.props.rightSideOfRoom.map((student)=>{
            return(<li>{student}</li>)
        })
        console.log(this.props);
        return(
            <div>
                <h1>Students!</h1>
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
console.log(connect);

// export default Student;
export default connect(mapStateToProps)(Student);