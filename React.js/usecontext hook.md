The `useContext` hook in React allows functional components to consume and subscribe to a context created by `React.createContext`. It provides a way to share data and functions across the component tree without explicitly passing props through every level of nesting. Here’s a detailed explanation and example of how to use the `useContext` hook:

### Understanding useContext:

Context in React is used to share values like themes, user preferences, or authentication status between components without having to explicitly pass props through each level of the component tree. `useContext` hook allows functional components to consume context values that are provided by a `Provider` higher up in the component tree.

### Example Usage:

Let's create a simple example to demonstrate how `useContext` works:

1. **Create a Context:**

   First, you need to create a context using `React.createContext`. This will be your global state container.

   ```jsx
   // MyContext.js
   import React from 'react';

   const MyContext = React.createContext();

   export default MyContext;
   ```

2. **Provide Context Value:**

   Wrap your application (or part of it) with a `Provider` component provided by the context. This will supply the context value to all components that are descendants of this `Provider`.

   ```jsx
   // App.js
   import React, { useState } from 'react';
   import MyContext from './MyContext';
   import ChildComponent from './ChildComponent';

   function App() {
     const [data, setData] = useState("Initial Context Data");

     return (
       <MyContext.Provider value={{ data, setData }}>
         <div>
           <h1>Parent Component</h1>
           <ChildComponent />
         </div>
       </MyContext.Provider>
     );
   }

   export default App;
   ```

3. **Consume Context Value:**

   In a child component, use the `useContext` hook to access the context value provided by the `MyContext.Provider`.

   ```jsx
   // ChildComponent.js
   import React, { useContext } from 'react';
   import MyContext from './MyContext';

   function ChildComponent() {
     const { data, setData } = useContext(MyContext);

     const handleClick = () => {
       setData("Updated Context Data");
     };

     return (
       <div>
         <h2>Child Component</h2>
         <p>Context Data: {data}</p>
         <button onClick={handleClick}>Update Context Data</button>
       </div>
     );
   }

   export default ChildComponent;
   ```

### Explanation:

- **Provider (`MyContext.Provider`):** Wraps the part of your component tree where you want to make the context available. It accepts a `value` prop which provides the context data.
  
- **Consumer (`useContext` hook):** In the `ChildComponent`, we use `useContext(MyContext)` to access the context value (`data` and `setData`). This hook subscribes the component to updates from the context provider whenever the `value` prop of the context changes.

- **Updating Context (`setData`):** Inside `ChildComponent`, when `setData` is called, it updates the context data (`data`) provided by the `MyContext.Provider`. This update is then reflected in all components that consume this context.

### Important Notes:

- **Performance Optimization:** React `useContext` hook optimizes re-renders by subscribing only to the context value it uses. It ensures that the component re-renders only when the context it subscribes to changes.

- **Limitations:** `useContext` can only be used inside functional components. If you need to subscribe to multiple contexts, you can use multiple `useContext` calls or create a wrapper component that combines multiple contexts into one.

Using the `useContext` hook simplifies state management and improves code organization by allowing you to pass data and functions through the component tree without manually passing props at every level. This makes your React application more scalable and easier to maintain.