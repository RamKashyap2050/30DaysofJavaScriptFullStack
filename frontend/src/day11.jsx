import React, { useRef, useReducer, useState, useMemo } from 'react';

// useReducer for managing complex state (Counter)
// Consider useReducer a more powerful version of useState that allows multiple actions (like increment and decrement) 
// for state management. It's beneficial for reducing the number of individual state variables (consts/lets) 
// which can help with performance and memory efficiency.
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// useMemo for optimizing expensive calculations
// useMemo is useful when you have expensive computations that you want to avoid recalculating on every render.
// It only recalculates when its dependencies change, improving performance.
function ExpensiveCalculation({ num }) {
  const expensiveResult = useMemo(() => {
    console.log('Calculating...');
    return num * 10;
  }, [num]); // Only recalculates if 'num' changes

  return <p>Result: {expensiveResult}</p>;
}

const Day11 = () => {
    // useRef allows you to directly interact with DOM elements without causing re-renders.
    // This is useful for performance optimization when you want to modify DOM elements like inputs 
    // without affecting the component's lifecycle.
  const inputRef = useRef(null);

  // useReducer for managing complex state
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // useState for managing input and count
  const [input, setInput] = useState(1);

  // Function to focus the input field using useRef
  const focusInput = () => {
    inputRef.current.focus(); // Directly interacts with the DOM element without triggering a re-render
  };

  return (
    <div>
      {/* useRef: Focus the input field */}
      <h3>useRef Example</h3>
      <input ref={inputRef} type="text" placeholder="Enter text here" />
      <button onClick={focusInput}>Focus Input</button>

      {/* useReducer: Increment/Decrement Counter */}
      <h3>useReducer Example</h3>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>

      {/* useMemo: Expensive Calculation */}
      <h3>useMemo Example</h3>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <ExpensiveCalculation num={input} />
    </div>
  );
};

export default Day11;
