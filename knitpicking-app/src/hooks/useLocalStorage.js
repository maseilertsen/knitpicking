import { useState, useEffect } from 'react';

/**
 * useLocalStorage Hook
 *
 * A custom React hook that syncs state with localStorage.
 * Works just like useState, but persists data to localStorage.
 *
 * @param {string} key - The localStorage key to use
 * @param {any} initialValue - Default value if nothing in localStorage
 * @returns {[any, function]} - Returns [value, setValue] just like useState
 *
 * Example:
 *   const [projects, setProjects] = useLocalStorage('projects', []);
 */
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from localStorage by key
      const item = window.localStorage.getItem(key);

      // Parse stored json or return initialValue if nothing stored
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error reading localStorage, return initialValue
      console.error(`Error loading ${key} from localStorage:`, error);
      return initialValue;
    }
  });

  // useEffect runs after render - saves to localStorage whenever value changes
  useEffect(() => {
    try {
      // Save to localStorage
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      // If error saving to localStorage (e.g., quota exceeded)
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  }, [key, storedValue]); // Re-run if key or value changes

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
