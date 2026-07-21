// src/components/TaskCount.jsx
import React from 'react';

/**
 * TaskCount Component
 * Displays the number of remaining active (incomplete) tasks
 * @param {Array} tasks - Array of all task objects
 * @returns {JSX.Element} Footer text with active task count
 */
const TaskCount = ({ tasks }) => {
  const activeCount = tasks.filter(task => !task.completed).length;

  return (
    <div className="task-count">
      <p>
        {activeCount === 0
          ? 'No tasks remaining'
          : `${activeCount} ${activeCount === 1 ? 'task' : 'tasks'} remaining`}
      </p>
    </div>
  );
};

export default TaskCount;