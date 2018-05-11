import React, {Component} from "react"

class SearchBarMenu extends Component{
    constructor(props) {
        super(props);
        this.setSearchText = this.setSearchText.bind(this)
    }

    setSearchText(text){
        this.props.onChangeSearchTextInput(text.target.value)
    }

    render(){
        return(
            <div className="form-group has-feedback">
                <input type="text" className="form-control" onChange={this.setSearchText} placeholder="Search" />
                <i className="glyphicon glyphicon-search form-control-feedback"></i>
            </div>
        )
    }
}

export default SearchBarMenu;