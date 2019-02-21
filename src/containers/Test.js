import React, { Component } from 'react';
import { connect } from 'react-redux'

class Test extends Component{
    render(){
        const last = this.props.rightSideOfRoom[this.props.rightSideOfRoom.length-1];
        return(
            <div>
                {last}
            </div>
        )
    }
}

function mapStateToProps(state){
        return {
            rightSideOfRoom: state.students
        }
    }
    
export default connect(mapStateToProps,null)(Test);
