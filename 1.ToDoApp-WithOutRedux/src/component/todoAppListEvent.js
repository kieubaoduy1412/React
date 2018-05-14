import React, {Component} from "react"

class ListEventTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            listEvent : this.props.listEvent
        }
        this.deleteEvent = this.deleteEvent.bind(this)
    }

    deleteEvent(id){
        this.props.removeEvent(id)
    }

    render(){
        var row = [];

        for (let index = 0; index < this.state.listEvent.length; index++) {
            for (let i = 0; i < this.props.removeEventListItem.length ; i++){
                if(this.state.listEvent[index].id === this.props.removeEventListItem[i]){
                    this.state.listEvent[index].isShow = false
                }
            }
        }

        for (let index = 0; index < this.state.listEvent.length; index++) {
            if(this.state.listEvent[index].title.match(this.props.searchText) && this.state.listEvent[index].isShow == true){
                var timeStamp = this.state.listEvent[index].id + Date.now()
                row.push(
                    <input className="btn btn-danger" type="reset" 
                        value={this.state.listEvent[index].title}
                        key={timeStamp}
                        onClick={() => this.deleteEvent(this.state.listEvent[index].id)}/>
                )
            }
        }

        return(
            <div className = "list-table">
                {row}
            </div>
        )
    }
}

export default ListEventTable;
