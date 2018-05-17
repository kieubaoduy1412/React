import React from "react"
import ReactDOM from "react-dom"
import "./style/index.css"

import TodoApp from "./container/todoApp.js"
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducers.js';

// Create store
const store = createStore(rootReducer);

var destination = document.querySelector("#root")

const appRoot = (
    <Provider store={store}>
        <TodoApp />
    </Provider>
)

ReactDOM.render(
    appRoot,destination
)