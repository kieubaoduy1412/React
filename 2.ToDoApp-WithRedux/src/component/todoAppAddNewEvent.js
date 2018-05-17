import React, {Component} from "react"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodo} from "../action/ToDoActions"

class AddNewEventComponent extends Component{
    constructor(props){
        super(props),
        this.state = {
            newEvent : ""
        }
    }

    render(){
        return(
            <form className="form-inline">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="New Event" onChange={(e) => {this.state.newEvent = e.target.value}}/>
                </div>
                <input className="btn btn-default" type="reset" 
                        value="Add" 
                        onClick={() => this.props.addTodoOfThis(this.state.newEvent)} />
            </form>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({addTodoOfThis: addTodo}, dispatch);
}

// container components to connect the presentational components to Redux
let AddNewEvent = connect(null, mapDispatchToProps)(AddNewEventComponent);

export default AddNewEvent;