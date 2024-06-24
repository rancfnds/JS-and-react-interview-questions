In React, there are several methods to pass data between components depending on the relationship between the components:

1. **Props (Properties):**
   - **Parent to Child:** You can pass data from a parent component to a child component by using props. Define attributes in the parent component and then access them in the child component through `this.props`. Example:
     ```jsx
     // ParentComponent.jsx
     import React from 'react';
     import ChildComponent from './ChildComponent';

     function ParentComponent() {
       const data = "Hello from Parent";
       return (
         <div>
           <ChildComponent dataProp={data} />
         </div>
       );
     }

     // ChildComponent.jsx
     import React from 'react';

     function ChildComponent(props) {
       return <div>{props.dataProp}</div>;
     }

     export default ChildComponent;
     ```

2. **State Management (useState, useReducer):**
   - **Sibling Components or Unrelated Components:** To share state between sibling components or components that don’t have a parent-child relationship, you can use state management libraries like Redux, context API, or React's built-in state management (useState and useReducer hooks). Example using `useState`:
     ```jsx
     // App.js
     import React, { useState } from 'react';
     import ComponentA from './ComponentA';
     import ComponentB from './ComponentB';

     function App() {
       const [sharedData, setSharedData] = useState("Initial Data");

       return (
         <div>
           <ComponentA sharedData={sharedData} />
           <ComponentB setSharedData={setSharedData} />
         </div>
       );
     }

     // ComponentA.jsx
     import React from 'react';

     function ComponentA(props) {
       return <div>{props.sharedData}</div>;
     }

     // ComponentB.jsx
     import React from 'react';

     function ComponentB(props) {
       const handleClick = () => {
         props.setSharedData("New Data");
       };

       return <button onClick={handleClick}>Change Data</button>;
     }

     export default App;
     ```

3. **Context API:**
   - **Global Data:** For passing data through multiple levels of components without explicitly passing props at every level, you can use the Context API. It allows you to create a provider and consumer pattern to share data across the component tree. Example:
     ```jsx
     // MyContext.js
     import React from 'react';

     const MyContext = React.createContext();

     export default MyContext;
     ```

     ```jsx
     // App.js
     import React, { useState } from 'react';
     import MyContext from './MyContext';
     import ComponentA from './ComponentA';
     import ComponentB from './ComponentB';

     function App() {
       const [data, setData] = useState("Initial Context Data");

       return (
         <MyContext.Provider value={{ data, setData }}>
           <div>
             <ComponentA />
             <ComponentB />
           </div>
         </MyContext.Provider>
       );
     }

     export default App;
     ```

     ```jsx
     // ComponentA.jsx
     import React, { useContext } from 'react';
     import MyContext from './MyContext';

     function ComponentA() {
       const { data } = useContext(MyContext);
       return <div>{data}</div>;
     }

     export default ComponentA;
     ```

     ```jsx
     // ComponentB.jsx
     import React, { useContext } from 'react';
     import MyContext from './MyContext';

     function ComponentB() {
       const { setData } = useContext(MyContext);

       const handleClick = () => {
         setData("New Context Data");
       };

       return <button onClick={handleClick}>Change Context Data</button>;
     }

     export default ComponentB;
     ```

These methods cover various scenarios for passing data between components in React, from simple parent-child relationships using props to more complex state management and context-based solutions for global state sharing.