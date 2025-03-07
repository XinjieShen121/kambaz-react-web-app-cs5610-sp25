import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  title: string;
}

const initialState: Todo[] = [
  { id: "1", title: "Learn React" },
  { id: "2", title: "Learn Node" },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer; 