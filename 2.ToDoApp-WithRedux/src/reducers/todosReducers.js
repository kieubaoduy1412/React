import { ADD_TODO, DELETE_TODO, EDIT_TODO, MARK_TODO, MARK_ALL, CLEAR_MARKED, LIST_TODO, SEARCH_TODO } from '../constants/ActionTypes';
import * as myConstClass from '../constants/ToDoListItem.js';

// export default function todos(state = myConstClass.toDoListItem, action)
var init = {state:myConstClass.toDoListItem, searchText:""}
export default (state = init, action) => {
    switch (action.type) {
        case ADD_TODO:
            var arrayTemp = [...state.state,{
                id: (state.state.length === 0) ? 0 : parseInt(state.state[state.state.length-1].id) + 1,
                title: action.title,
                isShow: true
            }]
            var obj = {state: arrayTemp, searchText:""}
            return obj;

        case DELETE_TODO:
            var arrayTemp = state.state.filter((todo) => todo.id !== action.id);
            var obj = {state: arrayTemp, searchText:""}
            return obj;

        case SEARCH_TODO:
            var obj = {state: state.state, searchText:action.searchText}
            return obj;

        default:
            var obj = {state: state.state, searchText:""}
            return obj;
    }
}

//
// REFERENCE CODE
//

// case DELETE_TODO:
//     return state.filter((todo) => todo.id !== action.id);
// case EDIT_TODO:
//     return state.map((todo) => todo.id === action.id ? { ...todo, text: action.text } : todo);
// case MARK_TODO:
//     return state.map((todo) => todo.id === action.id ? { ...todo, marked: !todo.marked } : todo);
// case MARK_ALL:
//     const areAllMarked = state.every((todo) => todo.marked);
//     return state.map((todo) => ({...todo, marked: !areAllMarked}));
// case CLEAR_MARKED:
//     return state.filter((todo) => todo.marked === false);