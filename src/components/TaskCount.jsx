// src/components/TaskCount.jsx
import React from 'react';

/**
 * TaskCount Component
 * Displays the number of remaining active (incomplete) tasks
 * @param {Array} tasks - Array of all task objects
 * @returns {JSX.Element} Footer text with active task count
 */
const TaskCount = ({ remaining }) => {
  return (
    <div className="task-count">
      <p>
        {remaining === 0
          ? 'No tasks remaining'
          : `${remaining} ${remaining === 1 ? 'task' : 'tasks'} remaining`}
      </p>
    </div>
  );
};

export default TaskCount;
