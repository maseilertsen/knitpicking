import React, { useState } from 'react';

/**
 * SIMPLE REACT EXAMPLE
 * This demonstrates the 3 core concepts you'll use in this project:
 * 1. Components (reusable UI pieces)
 * 2. Props (passing data to components)
 * 3. State (data that changes over time)
 */

// ============================================
// CONCEPT 1: COMPONENT
// ============================================
// A component is just a JavaScript function that returns JSX (HTML-like syntax)
// This is a simple "presentational" component - it just displays data

function CounterDisplay(props) {
  // props.label and props.value come from the parent component
  return (
    <div style={{
      padding: '20px',
      margin: '10px',
      border: '2px solid pink',
      borderRadius: '8px',
      backgroundColor: '#1a1a1a',
      color: 'white'
    }}>
      <h3>{props.label}</h3>
      <p style={{ fontSize: '48px', margin: '10px 0' }}>
        {props.value}
      </p>
    </div>
  );
}

// ============================================
// CONCEPT 2: STATE & HOOKS
// ============================================
// State is data that can change. When state changes, React re-renders the component.
// useState is a "Hook" - a special function that lets you use state in a component.

function InteractiveCounter(props) {
  // useState returns two things:
  // 1. The current value (count)
  // 2. A function to update it (setCount)
  const [count, setCount] = useState(0);  // 0 is the initial value

  // Event handlers - functions that run when user clicks buttons
  const increment = () => {
    setCount(count + 1);  // Update state
  };

  const decrement = () => {
    // Only decrement if count is greater than 0 (no negative numbers!)
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);  // Reset to zero
  };

  return (
    <div style={{
      padding: '20px',
      margin: '10px',
      border: '2px solid hotpink',
      borderRadius: '8px',
      backgroundColor: '#1a1a1a',
      color: 'white'
    }}>
      <h3>{props.label}</h3>
      <p style={{ fontSize: '48px', margin: '10px 0' }}>
        {count}
      </p>

      {/* Button group */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button
          onClick={decrement}
          disabled={count === 0}  // Disable button when count is 0
          style={{
            padding: '10px 20px',
            fontSize: '20px',
            cursor: count === 0 ? 'not-allowed' : 'pointer',
            backgroundColor: count === 0 ? '#555' : '#ff69b4',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          -
        </button>

        <button
          onClick={reset}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#555',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Reset
        </button>

        <button
          onClick={increment}
          style={{
            padding: '10px 20px',
            fontSize: '20px',
            cursor: 'pointer',
            backgroundColor: '#ff69b4',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

// ============================================
// CONCEPT 3: PROPS (Passing Data)
// ============================================
// The parent component can pass data to child components via "props"

function SimpleExample() {
  // This component uses state to manage data
  const [rowCount, setRowCount] = useState(15);

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#0a0a0a',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        React Learning Example
      </h1>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>

        {/* EXAMPLE 1: Simple component with props */}
        <h2 style={{ color: '#ff69b4', marginTop: '30px' }}>
          1. Component with Props (Read-Only Display)
        </h2>
        <p style={{ color: '#aaa' }}>
          This component receives data from its parent and displays it.
          The value doesn't change - it's just for display.
        </p>
        {/* Passing rowCount as a prop */}
        <CounterDisplay
          label="Rows Completed"
          value={rowCount}
        />

        {/* EXAMPLE 2: Interactive component with state */}
        <h2 style={{ color: '#ff69b4', marginTop: '30px' }}>
          2. Component with State (Interactive)
        </h2>
        <p style={{ color: '#aaa' }}>
          This component manages its own data using the useState hook.
          Click the buttons to change the counter value.
        </p>
        <InteractiveCounter label="Pattern Repeats" />

        {/* EXAMPLE 3: Multiple instances of same component */}
        <h2 style={{ color: '#ff69b4', marginTop: '30px' }}>
          3. Reusable Components
        </h2>
        <p style={{ color: '#aaa' }}>
          Components can be reused with different props. Each one has its own
          independent state!
        </p>
        <InteractiveCounter label="Rows" />
        <InteractiveCounter label="Needles" />
      </div>

      {/* KEY TAKEAWAYS */}
      <div style={{
        maxWidth: '600px',
        margin: '40px auto',
        padding: '20px',
        backgroundColor: '#1a1a1a',
        borderLeft: '4px solid #ff69b4',
        color: 'white'
      }}>
        <h3 style={{ color: '#ff69b4' }}>🔑 Key Takeaways:</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Components</strong>: Reusable UI building blocks (functions that return JSX)</li>
          <li><strong>Props</strong>: Data passed FROM parent TO child (read-only)</li>
          <li><strong>State</strong>: Data that changes over time (managed with useState)</li>
          <li><strong>Event Handlers</strong>: Functions that run when users interact (onClick, onChange, etc.)</li>
          <li><strong>Re-rendering</strong>: When state changes, React automatically updates the UI</li>
        </ul>
      </div>
    </div>
  );
}

export default SimpleExample;
