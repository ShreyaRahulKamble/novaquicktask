// src/components/TaskItem.jsx

import React from 'react';

/**
 * TaskItem Component
 * Renders a single task as a card with:
 * - Checkbox to mark complete/incomplete
 * - Task title (strikethrough when completed)
 * - Delete button
 * 
 * @param {Object} task - Task object with id, text, and completed properties
 * @param {Function} onToggle - Callback to toggle task completion status
 * @param {Function} onDelete - Callback to delete the task
 */
const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="task-item">
      <div className="task-item__content">
        <input
          type="checkbox"
          className="task-item__checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label={`Mark "${task.text}" as ${task.completed ? 'incomplete' : 'complete'}`}
        />
        <span
          className={`task-item__text ${task.completed ? 'task-item__text--completed' : ''}`}
        >
          {task.text}
        </span>
      </div>
      <button
        className="task-item__delete"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete task "${task.text}"`}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;