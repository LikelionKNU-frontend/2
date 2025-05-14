import React from "react";

function TodoItem({ todo, onRemoveTodo }) {
  return (
    <li>
      {todo.text}
      <button onClick={() => onRemoveTodo(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoItem;
