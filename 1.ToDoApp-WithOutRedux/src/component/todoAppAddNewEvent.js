import React, {Component} from "react"

class AddNewEvent extends Component{
    constructor(props){
        super(props),
        this.state = {
            newEvent : ""
        }
        this.addNewEvent = this.addNewEvent.bind(this)
        this.setOnChangeNewEvent = this.setOnChangeNewEvent.bind(this)
    }

    addNewEvent(e){
        var newEvent = this.state.newEvent
        this.props.addNewEvent(newEvent)
    }

    setOnChangeNewEvent(text){
        this.setState({
            newEvent : text.target.value
        })
    }

    render(){
        return(
            <form className="form-inline">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="New Event" onChange={this.setOnChangeNewEvent}/>
                </div>
                <input className="btn btn-default" type="reset" 
                        value="Add" 
                        onClick={this.addNewEvent} />
            </form>
        )
    }
}

export default AddNewEvent;