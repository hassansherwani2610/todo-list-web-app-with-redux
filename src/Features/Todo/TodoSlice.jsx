import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: []
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      const todo = {
        id: action.payload.id || uuidv4(),
        text: action.payload.text || action.payload
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    removeAll: (state) => {
      state.todos = [];
    },
    updateTodo: (state , action) => {
      const {newId , newText} = action.payload;
      const todo = state.todos.find(t => t.id === newId);
      if(todo){
        todo.text = newText;
      }
    }
  }
});

export const { addTodo, removeTodo , removeAll , updateTodo , setTodos } = todoSlice.actions;
export default todoSlice.reducer;
