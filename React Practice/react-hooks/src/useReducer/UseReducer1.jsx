/* eslint-disable no-unused-vars */
import React from 'react';
import {useReducer} from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1, showText: state.showText};
    case 'TOGGLE_TEXT':
      return {count: state.count, showText: !state.showText};
    default:
      return state;
  }
};

const UseReducer1 = () => {
  const [state, dispatch] = useReducer (reducer, {count: 0, showText: true});

  return (
    <div>
      {state.count}
      <button
        onClick={() => {
          dispatch ({type: 'INCREMENT'});
          dispatch ({type: 'TOGGLE_TEXT'});
        }}
      >
        Increment
      </button>
      {state.showText && <h5>Hello Texting...</h5>}
    </div>
  );
};

export default UseReducer1;
