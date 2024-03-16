/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

const State = () => {
  const [count, setCount] = useState (0);
  const [by, setBy] = useState (1);

  let decrement = () => {
    setCount (c => c - by); // updator function
  };

  let increment = () => {
    setCount (c => c + by);
  };

  let reset = () => {
    setCount (0);
  };

  let incrementBy = () => {
    setBy (b => b + 1);
  };

  let decrementBy = () => {
    setBy (b => b - 1);
  };

  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={() => decrement ()} style={{margin: '2.5px'}}>➖</button>
      <button onClick={() => reset ()}>Reset</button>
      <button onClick={() => increment ()} style={{margin: '2.5px'}}>➕</button>

      <h5>Increment / Decrement By : {by}</h5>
      <button onClick={() => decrementBy ()} style={{margin: '2.5px'}}>
        ➖
      </button>
      <button onClick={() => incrementBy ()} style={{margin: '2.5px'}}>
        ➕
      </button>
    </div>
  );
};

export default State;
