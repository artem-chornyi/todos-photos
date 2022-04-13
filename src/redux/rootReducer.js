import { combineReducers } from 'redux';
import { reducer } from './todo/todoReducers';

export const rootReducer = combineReducers({
    todo: reducer,
})