import React, {Component} from "react"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchTodo} from "../action/ToDoActions"

class SearchBarMenuComponent extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="form-group has-feedback search-bar">
                <input type="text" className="form-control" onChange={(e) => {this.props.searchTodoOfThis(e.target.value)}} placeholder="Search" />
                <i className="glyphicon glyphicon-search form-control-feedback"></i>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({searchTodoOfThis: searchTodo}, dispatch);
}

// container components to connect the presentational components to Redux
let SearchBarMenu = connect(null, mapDispatchToProps)(SearchBarMenuComponent);

export default SearchBarMenu;