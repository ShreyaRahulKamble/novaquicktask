// src/components/TaskInput.jsx

import { useState } from 'react';

export default function TaskInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() === '') {
      return;
    }

    onAddTask(inputValue);
    setInputValue('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task..."
        className="task-input"
        aria-label="Task input field"
      />
      <button
        onClick={handleAddTask}
        className="task-input-button"
        aria-label="Add task button"
      >
        Add
      </button>
    </div>
  );
}