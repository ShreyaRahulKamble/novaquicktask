// src/utils/taskStorage.js

const STORAGE_KEY = 'novaQuickTask_tasks';

/**
 * Retrieves all tasks from localStorage
 * @returns {Array} Array of task objects with id, text, and completed properties
 */
export const getTasks = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to retrieve tasks from localStorage:', error);
    return [];
  }
};

/**
 * Saves tasks array to localStorage
 * @param {Array} tasks - Array of task objects to persist
 * @returns {boolean} True if save was successful, false otherwise
 */
export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    return true;
  } catch (error) {
    console.error('Failed to save tasks to localStorage:', error);
    return false;
  }
};

/**
 * Clears all tasks from localStorage
 * @returns {boolean} True if clear was successful, false otherwise
 */
export const clearTasks = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Failed to clear tasks from localStorage:', error);
    return false;
  }
};