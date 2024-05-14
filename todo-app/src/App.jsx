import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Like this video",
  //     dueDate: "right now",
  //   },
  // ];

  const [todoItems,setTodoItems]=useState([]);


  const handleNewItem=(itemName,itemDueDate)=>{
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems=[...todoItems,{name: itemName,
    dueDate:itemDueDate},];
    setTodoItems(newTodoItems);
  };


  //handleDeleteItem

  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems=todoItems.filter(item =>item.name!==todoItemName);
    setTodoItems(newTodoItems);

    // console.log(`Item Deleted:${todoItemName}`);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />

      {todoItems.length===0 && <WelcomeMessage />}

      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;



/*
28. React-icon Library
 1. You can use a lot of icons without managing 
them.
 2. Install Package
 npm install react-icons --save
 3. Use icon:
 import {IconName} from "react-icons/fc"
*/



/*
29. Inspecting with React Dev Tools
 1. Inspection: Allows inspection of React component hierarchies.
 2. State & Props: View and edit the current state and props of 
components.
 3. Performance: Analyze component re-renders and performance 
bottlenecks. 
4. Navigation: Conveniently navigate through the entire component 
tree.
 5. Filtering: Filter components by name or source to locate them 
quickly. 
6. Real-time Feedback: See live changes as you modify state or props.
*/

/*
30. How React Works
 •React and ReactDOM:
 • The actual updating of the browser's DOM isn't done by React itself.
 • It's handled by a companion library called react-dom.
 •Root Element:
 • The root div acts as a container for the React app.
 • The script tag is where the React app starts executing.
 • If you check main.tsx, the component tree is rendered inside this 
root element.
 •Strict Mode Component:
 • It's a special component in React.
 • Doesn't have a visual representation.
 • Its purpose is to spot potential issues in your React app.
 •Platform Independence:
 • React's design allows it to be platform-agnostic.
 • While react-dom helps build web UIs using React, ReactNative can 
be used to craft mobile app UIs
*/



/*
31. React Vs Angular vs Vue
 •React, Angular, and Vue:
 • React is a library, while Angular and Vue.js are frameworks.
 • React focuses on UI; Angular and Vue.js offer comprehensive 
tools for full app development.
 •Library vs. Framework:
 • A library offers specific functionality.
 • A framework provides a set of tools and guidelines.
 • In simpler terms: React is a tool; Angular and Vue.js are toolsets.
 •React's Specialty:
 • React's main role is crafting dynamic, interactive UIs.
 • It doesn't handle routing, HTTP calls, state management, and 
more.
 •React's Flexibility:
 • React doesn't dictate tool choices for other app aspects.
 • Developers pick what fits their project best.
 •About Angular and Vue.js:
 • Angular, developed by Google, provides a robust framework with 
a steep learning curve.
 • Vue.js is known for its simplicity and ease of integration, making
*/




/*
32. Using Forms
 1. State Management: Each input's state 
is stored in the component's state.
 2. Handling Changes: Use onChange to 
detect input changes.
 3. Submission: Utilize onSubmit for form 
submissions and prevent default with 
event.preventDefault().
 4. Validation: Implement custom 
validation or use third-party libraries
*/


/*

33. Use Ref
 1. useRef allows access to DOM elements and 
retains mutable values without re-renders.
 2. Used with the ref attribute for direct DOM 
interactions.
 3. Can hold previous state or prop values.
 4. Not limited to DOM references; can hold any 
value.
 5. Refs can be passed as props als

*/



/*34. Update state from Previous State
 • Spread Operator: Use to maintain 
immutability when updating arrays or 
objects.
 • Functional Updates: Use 
(existingPosts) => [postData, ...existingPosts] 
to avoid stale values during asynchronous 
updates
 */



/*

35. Context API
 1. Prop Drilling: Context API addresses prop drilling; 
component composition is an alternative.
 2. Folder Setup: Use a store folder for context files.
 3. Initialization: Use React.createContext with initial state 
and export it.
 4. Provider: Implement with contextName.Provider in 
components.
 5. Access Value: Use the useContext hook.
 6. Dynamic Data: Combine context value with state.
 7. Export Functions: Context can also export functions for 
actions
 8. Logic Separation: This helps keep the UI and business 
logic separate from each other

*/




/*
36. Use Reducer
 1. useReducer is a hook in React that offers more control over 
state operations compared to useState, especially for 
complex state logic.
 2. Components: It involves two main components:
 • Reducer: A pure function that takes the current state and 
an action and returns a new state.
 • Action: An object describing what happened, typically 
having a type property.
 3. Initialization: It's invoked as 
const [state, dispatch] = useReducer(reducer, initialState).
 4. Dispatch: Actions are dispatched using the dispatch 
function, which invokes the reducer with the current state 
and the given action.
 5. Use Cases: Particularly useful for managing state in large 
components or when the next state depends on the 
previous one.
 6. Predictable State Management: Due to its strict structure, it 
leads to more predictable and maintainable state 
management.
*/