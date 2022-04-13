import { ADD, REMOVE, CHENGE } from './todoTypes';

export const addTodo = data => ({
    type: ADD,
    data
});

export const removeTodo = data => ({
    type: REMOVE,
    data
});

export const chengeTodo = data => ({
    type: CHENGE,
    data
});