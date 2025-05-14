import React, { useState, useRef } from "react";

function TodoInput({ onAddTodo }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(text);
    setText("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="할 일을 입력하세요."
        ref={inputRef}
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoInput;
