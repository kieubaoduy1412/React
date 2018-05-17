import * as types from '../constants/ActionTypes';

export function addTodo(title) {
    console.log("add new Event with title : " + title)
    return {
        type: types.ADD_TODO,
        title
    };
}

export function deleteTodo(id) {
    console.log("delete event with ID : " + id)
    return {
        type: types.DELETE_TODO,
        id
    }
}

export function searchTodo(searchText) {
    console.log("search event with title : " + searchText)
    return {
        type: types.SEARCH_TODO,
        searchText
    }
}