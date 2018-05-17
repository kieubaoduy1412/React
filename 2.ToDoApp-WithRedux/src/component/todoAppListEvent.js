import React, {Component} from "react"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTodo} from "../action/ToDoActions"

class ListEventTableComponent extends Component{
    constructor(props){
        super(props);
    }

    createTodoListItem(){
        console.log(this.props.todos)
        let listToDoItem = this.props.todos.state.map(
            (eachTodo) => {
                if(eachTodo.title.match(this.props.todos.searchText)){
                    return (
                        <input className="btn btn-danger" type="reset" 
                            value={eachTodo.title}
                            key={eachTodo.id}
                            onClick={() => {this.props.deleteTodoOfThis(eachTodo.id)}}
                        />
                    );
                } else {
                    return null;
                }
            }
        )
        return listToDoItem
    };

    render(){
        var row = [];

        return(
            <div>
                <div className = "list-table">
                    {this.createTodoListItem()}
                </div>
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todosReducers
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteTodoOfThis: deleteTodo}, dispatch);
}

// container components to connect the presentational components to Redux
let ListEventTable = connect(mapStateToProps, mapDispatchToProps)(ListEventTableComponent);

export default ListEventTable;