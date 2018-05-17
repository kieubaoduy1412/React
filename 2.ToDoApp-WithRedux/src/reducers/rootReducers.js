import { combineReducers } from 'redux';
import todosReducers from './todosReducers';

const rootReducer = combineReducers({
    todosReducers
    // abcReducer : abcReducers if you have many reducer
});

export default rootReducer;