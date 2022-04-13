import { ADD, REMOVE, CHENGE } from './todoTypes';
import { checkLocalStorage, changeLocalStorage } from '../../utils';
import { values } from '../../theme/values';

export const INITIAL_STATE = {
    todos: checkLocalStorage(values.TODO_IN_LOCAL_STOAGE)
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD:
            const addToState = [
                ...state.todos,
                action.data
            ];

            changeLocalStorage(values.TODO_IN_LOCAL_STOAGE, addToState);

            return {
                todos: addToState
            };;

        case REMOVE:
            const stateAfteRemove = state.todos.filter(todo => todo !== action.data )

            changeLocalStorage(values.TODO_IN_LOCAL_STOAGE, stateAfteRemove);

            return {
                todos: stateAfteRemove
            };;

        case CHENGE:
            const stateAfteChenge = state.todos.map(todo => (
                todo.id === action.data.id
                    ? action.data
                    : todo
            ));

            changeLocalStorage(values.TODO_IN_LOCAL_STOAGE, stateAfteChenge);


            return {
                todos: stateAfteChenge
            };

        default:
            return state;
    };
};