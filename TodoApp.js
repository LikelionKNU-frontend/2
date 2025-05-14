import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} onRemoveTodo={removeTodo} />
    </div>
  );
}

export default TodoApp;
