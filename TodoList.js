import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onRemoveTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
