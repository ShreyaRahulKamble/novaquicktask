// src/components/TaskItem.jsx
import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="task-item">
      <div className="task-item__content">
        <input
          type="checkbox"
          className="task-item__checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label={`Mark "${task.title}" as ${task.completed ? 'incomplete' : 'complete'}`}
        />
        <span
          className={`task-item__text ${task.completed ? 'task-item__text--completed' : ''}`}
        >
          {task.title}
        </span>
      </div>
      <button
        className="task-item__delete"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete task "${task.title}"`}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
