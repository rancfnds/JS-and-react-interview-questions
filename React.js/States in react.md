React Hooks are functions that enable functional components to have stateful logic and lifecycle features that were previously only available in class components. They were introduced in React 16.8 to provide a more concise and expressive way to handle state and side effects in React applications.

### Commonly Used React Hooks:

1. **useState:**
   - **Purpose:** `useState` is used to add state variables to functional components. It returns a stateful value and a function to update that value, allowing components to manage their own state.
   - **Example:**
     ```jsx
     import React, { useState } from 'react';

     function Counter() {
       const [count, setCount] = useState(0);

       const increment = () => {
         setCount(count + 1);
       };

       return (
         <div>
           <p>Count: {count}</p>
           <button onClick={increment}>Increment</button>
         </div>
       );
     }

     export default Counter;
     ```

2. **useEffect:**
   - **Purpose:** `useEffect` allows functional components to perform side effects (e.g., data fetching, subscriptions, DOM manipulations) after render. It serves a similar purpose to `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.
   - **Example:**
     ```jsx
     import React, { useState, useEffect } from 'react';

     function DataFetcher() {
       const [data, setData] = useState(null);

       useEffect(() => {
         // Perform data fetching or any side effect
         fetch('https://api.example.com/data')
           .then(response => response.json())
           .then(data => setData(data))
           .catch(error => console.error('Error fetching data:', error));
       }, []); // Empty dependency array means this effect runs only once after initial render

       return (
         <div>
           {data ? <p>Data: {data}</p> : <p>Loading...</p>}
         </div>
       );
     }

     export default DataFetcher;
     ```

3. **useContext:**
   - **Purpose:** `useContext` allows functional components to consume and subscribe to a context created by `React.createContext`. It provides a way to avoid prop drilling (passing props through multiple levels of components).
   - **Example:**
     ```jsx
     import React, { useContext } from 'react';
     import MyContext from './MyContext';

     function ChildComponent() {
       const { data, setData } = useContext(MyContext);

       const handleClick = () => {
         setData("New Data");
       };

       return (
         <div>
           <p>Data from Context: {data}</p>
           <button onClick={handleClick}>Update Context Data</button>
         </div>
       );
     }

     export default ChildComponent;
     ```

4. **useReducer:**
   - **Purpose:** `useReducer` is an alternative to `useState` for managing complex state logic. It is similar to reducers in Redux and allows you to manage state transitions in a predictable way.
   - **Example:**
     ```jsx
     import React, { useReducer } from 'react';

     const initialState = { count: 0 };

     function reducer(state, action) {
       switch (action.type) {
         case 'increment':
           return { count: state.count + 1 };
         case 'decrement':
           return { count: state.count - 1 };
         default:
           throw new Error('Unexpected action');
       }
     }

     function Counter() {
       const [state, dispatch] = useReducer(reducer, initialState);

       return (
         <div>
           <p>Count: {state.count}</p>
           <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
           <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
         </div>
       );
     }

     export default Counter;
     ```

5. **useMemo and useCallback:**
   - **useMemo:**
     - **Purpose:** `useMemo` memoizes the result of a function and re-computes it only when one of its dependencies has changed. It optimizes performance by avoiding unnecessary re-calculations.
     - **Example:**
       ```jsx
       import React, { useMemo } from 'react';

       function MemoExample({ a, b }) {
         const result = useMemo(() => {
           console.log('Calculating result...');
           return a + b;
         }, [a, b]);

         return <p>Result: {result}</p>;
       }

       export default MemoExample;
       ```

   - **useCallback:**
     - **Purpose:** `useCallback` memoizes a callback function and returns a memoized version of the callback that only changes if one of the dependencies has changed. It is useful for optimizing performance in child components that rely on reference equality.
     - **Example:**
       ```jsx
       import React, { useState, useCallback } from 'react';

       function ParentComponent() {
         const [count, setCount] = useState(0);

         const handleClick = useCallback(() => {
           setCount(count + 1);
         }, [count]);

         return (
           <div>
             <p>Count: {count}</p>
             <ChildComponent onClick={handleClick} />
           </div>
         );
       }

       function ChildComponent({ onClick }) {
         return <button onClick={onClick}>Increment</button>;
       }

       export default ParentComponent;
       ```

React Hooks provide a powerful way to manage state and lifecycle methods in functional components, making them more concise and eliminating the need for class components in many cases. They streamline React development by promoting reusable logic and improving code readability and maintainability. Each hook serves a specific purpose, enabling developers to handle various aspects of component logic effectively.