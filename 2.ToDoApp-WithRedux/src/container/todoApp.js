import React, {Component} from "react"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddNewEvent from "../component/todoAppAddNewEvent.js"
import ListEventTable from "../component/todoAppListEvent.js"
import SearchBarMenu from "../component/todoAppSearchBar.js"
import * as myConstClass from '../constants/ToDoListItem.js';
import * as TodoActions from '../action/ToDoActions.js';

class TodoApp extends Component{
    render(){
        return(
            <div>
                <SearchBarMenu />
                <AddNewEvent />
                <div className="message-alert">
                    <h3>Click event to delete</h3>
                </div>
                <ListEventTable />
            </div>
        )
    }
}

export default TodoApp;