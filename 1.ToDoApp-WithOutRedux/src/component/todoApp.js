import React, {Component} from "react"
import SearchBarMenu from "./todoAppSearchBar.js"
import AddNewEvent from "./todoAppAddNewEvent.js"
import ListEventTable from "./todoAppListEvent.js"
import * as myConstClass from '../constant.js';

class TodoApp extends Component{
    constructor (props){
        super(props)
        this.state = {
            listEvent : myConstClass.toDoListItem,
            searchText : "",
            removeEventListItem : []
        }
        this.functionOnChangeSearchText = this.functionOnChangeSearchText.bind(this)
        this.functionRemoveEvent = this.functionRemoveEvent.bind(this)
        this.functionaddNewEvent = this.functionaddNewEvent.bind(this)
    }

    functionOnChangeSearchText(searchTextValue){
        this.setState({
            searchText : searchTextValue
        });
    }

    functionRemoveEvent(id){
        var temp = this.state.removeEventListItem;
        temp.push(id)
        this.setState({
            removeEventListItem : temp
        })
    }

    functionaddNewEvent(newEvent){
        var listEventTemp = this.state.listEvent;
        var newEventModel = new Object();
        newEventModel.id = parseInt(listEventTemp[listEventTemp.length - 1].id) +1
        newEventModel.title = newEvent;
        newEventModel.isShow = true;
        listEventTemp.push(newEventModel);

        this.setState({
            listEvent : listEventTemp
        })
    }

    render(){
        return(
            <div>
                <SearchBarMenu 
                    onChangeSearchTextInput = {this.functionOnChangeSearchText}
                />
                <AddNewEvent 
                    addNewEvent = {this.functionaddNewEvent}
                />
                <div className="message-alert">
                    <h3>Click event to delete</h3>
                </div>
                <ListEventTable 
                    listEvent = {this.state.listEvent}
                    searchText = {this.state.searchText}
                    removeEventListItem = {this.state.removeEventListItem}
                    removeEvent = {this.functionRemoveEvent}
                />
            </div>
        )
    }
}

export default TodoApp