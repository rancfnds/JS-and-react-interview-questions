In React, **state** and **props** are fundamental concepts that help manage and pass data within components, but they serve different purposes and have distinct characteristics:

### State in React:

1. **Definition:**
   - **State** is a built-in feature of React components that represents the current state of the component. It is mutable and can be updated using the `setState` method provided by React.

2. **Purpose:**
   - State is used to manage data that can change over time within a component. Examples include user input, toggling UI elements, or fetching data asynchronously.

3. **Declaration:**
   - State is declared within a component using the `useState` hook (for functional components) or by initializing `this.state` (for class components).

     ```jsx
     // Functional Component
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

     ```jsx
     // Class Component
     import React, { Component } from 'react';

     class Counter extends Component {
       constructor(props) {
         super(props);
         this.state = {
           count: 0
         };
       }

       increment = () => {
         this.setState({ count: this.state.count + 1 });
       };

       render() {
         return (
           <div>
             <p>Count: {this.state.count}</p>
             <button onClick={this.increment}>Increment</button>
           </div>
         );
       }
     }

     export default Counter;
     ```

4. **Scope:**
   - State is local to the component where it is defined. Changes to state trigger re-renders of the component and its child components that rely on this state.

5. **Immutability:**
   - State should be updated immutably using the `setState` function (functional update) to ensure proper React state management and rendering.

### Props in React:

1. **Definition:**
   - **Props** (short for properties) are inputs to a React component. They are passed from a parent component to a child component.

2. **Purpose:**
   - Props allow parent components to pass data and methods to child components. They are read-only for the child component and cannot be modified within the child.

3. **Usage:**
   - Props are accessed inside functional components via function parameters and in class components via `this.props`.

     ```jsx
     // Parent Component
     import React from 'react';
     import ChildComponent from './ChildComponent';

     function ParentComponent() {
       const greeting = "Hello from Parent";
       return <ChildComponent message={greeting} />;
     }

     // Child Component
     import React from 'react';

     function ChildComponent(props) {
       return <p>{props.message}</p>;
     }

     export default ChildComponent;
     ```

4. **Scope:**
   - Props flow in a unidirectional manner from parent to child. They are used to pass data or functions down the component hierarchy.

5. **Immutability:**
   - Props are immutable within the child component. They cannot be modified directly by the child component; only the parent component that owns the prop can modify it.

### Key Differences:

- **Mutability:** State is mutable and can be changed within the component using `setState`, while props are immutable and cannot be changed within the child component.
  
- **Ownership:** State is owned and managed within the component where it is declared, while props are passed down from parent to child components.
  
- **Scope:** State is local to the component, affecting only that component and its descendants, whereas props are used for communication between components in the component tree.

In summary, while both state and props manage data in React components, state is internal and mutable, managed within the component, while props are external and immutable, passed down from parent components. Understanding these differences is crucial for effectively managing data flow and rendering within React applications.