import React from "react"
import ReactDOM from "react-dom"
import "./style/index.css"
import * as myConstClass from './constant.js';
import TodoApp from "./component/todoApp.js"

var destination = document.querySelector("#root")

ReactDOM.render(
    <TodoApp />,destination
)