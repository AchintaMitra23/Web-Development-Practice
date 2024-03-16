Props - Read Only properties that are shared between components. A parent component can send data to a chils component.
<Component key=value />


--------------------------------
Click Events - An interaction when a user clicks on a specific element like button, image, card etc.

We can respond to clicks by passing a callback to the onClick event handler.


--------------------------------
React Hooks - Special function that allows functional components to use react features without writing class components (React v16.8)

Ex - useState, useEffect, useContext, useReducer, useCallback etc.
--------------------------------


useState() - A React hook that allows the creation of a stateful variable and a setter function to update its value in the Virtual DOM.

Ex - [name, setName]
--------------------------------


onChange - Event handler used primarily with form element. Triggers a function every time the value of the input changes.

Ex - <input>, <textarea>, <select>, <radio>.
--------------------------------


updater function - A function passed as an argument to steState() usually 
Ex - setYear(year + 1) // setYear(arrow function)

Allow for safe updates based on the previous state. Used with multiple state updates and asynchronous functions.
---------------------------------


useEffect() - React hook that tells React to DO SOME CODE WHEN (pick one) :
1. This component re-renders.
2. This component mounts.
3. The satte of a value.

useEffect(function, [dependencies])

1. useEffect(() => {}) -> Runs after every re-renders
2. useEffect(() => {}, []) -> Runs only on mount
3. useEffect(() => {}, [value]) -> Runs on mount + when value changes

Uses - 
1. Event Listeners.
2. DOM manipulation.
3. Subscriptions.
4. Fetching Data from an API.
5. Clean up when a component unmounts.
-------------------------------


useContext() - React Hook that allows to share values b/w multiple levels of components without passing props through each level.

Provider Component - 
1. import {createContext} from 'react';
2. export const MyContext = createContext();
<MyContext.Provider value = {value}>
  <Child />
</MyContext.Provider>

Consumer Component - 
1. import React, {useContext} from 'react';
2. import { MyContext } from '<PARENT_COMPONENT>';
3. const value = useContext(MyContext);
------------------------------


useRef() - Does not cause re-renders when its value changes. When you want a component to "remember" some information, but you don't want that info to trigger new renders.

1. Accessing / Interacting with DOM elements.
2. Handling Focus, Animations, and Transitions.
3. Managing Timers and Intervals.
------------------------------