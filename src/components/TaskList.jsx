// src/components/TaskList.jsx

import TaskItem from './TaskItem';

/**
 * TaskList Component
 * Renders a filtered list of tasks based on the current filter state.
 * Each task is rendered as a TaskItem component with full CRUD capabilities.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.tasks - Array of task objects to display (already filtered)
 * @param {Function} props.onToggleComplete - Callback to toggle task completion status
 * @param {Function} props.onDeleteTask - Callback to delete a task
 * @returns {JSX.Element} Rendered task list or empty state message
 */
export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  // Empty state when no tasks match current filter
  if (tasks.length === 0) {
    return (
      <div className="task-list empty-state">
        <p className="empty-message">No tasks yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}
