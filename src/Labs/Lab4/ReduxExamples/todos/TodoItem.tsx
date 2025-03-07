//import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

// Declare the type definition for 'todo'
interface TodoProps {
  todo: {
    id: string;
    title: string;
  };
}

export default function TodoItem({ todo }: TodoProps) {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className="fw-bold">{todo.title}</span>
      <div className="d-flex gap-2">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(setTodo(todo))}
          id="wd-set-todo-click"
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteTodo(todo.id))}
          id="wd-delete-todo-click"
        >
          Delete
        </button>
      </div>
    </li>
  );
}