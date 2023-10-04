import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, title: 'todo1', completed: false },
    { id: 2, title: 'todo2', completed: false },
    { id: 3, title: 'todo3', completed: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    toggleUpdate: (state, action) => {
      const { id, title } = action.payload;
      const index = state.findIndex((todo) => todo.id === id);
      state[index].title = title;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, toggleUpdate, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
