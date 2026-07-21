// src/App.jsx
import { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import TaskCount from './components/TaskCount';
import { getTasks, saveTasks } from './utils/taskStorage';
import './index.css';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = getTasks();
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // Add a new task
  const addTask = (title) => {
    if (title.trim() === '') return;
    
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };
    
    setTasks([...tasks, newTask]);
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks based on current filter state
  const getFilteredTasks = () => {
    if (filter === 'active') {
      return tasks.filter((task) => !task.completed);
    }
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  };

  // Count remaining active tasks
  const remainingCount = tasks.filter((task) => !task.completed).length;

  const filteredTasks = getFilteredTasks();

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>NovaQuickTask</h1>
        <p>Your simple, beautiful to-do list</p>
      </header>

      <main className="app-main">
        <TaskInput onAddTask={addTask} />
        
        <FilterBar currentFilter={filter} onFilterChange={setFilter} />
        
        <TaskList
          tasks={filteredTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
        
        <TaskCount remaining={remainingCount} />
      </main>
    </div>
  );
}