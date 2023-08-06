import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: Date.now(),
                title: action.payload.title,
                completed: false
            });
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(el => el.id !== action.payload.id);
        },
        doneTodo(state, action) {
            const todo = state.todos.find(el => el.id === action.payload.id);
            todo.completed = !todo.completed;
        }
    }
})

export const { addTodo, removeTodo, doneTodo } = todoSlice.actions;

export default todoSlice.reducer;


