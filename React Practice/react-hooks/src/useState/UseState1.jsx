/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

const UseState1 = () => {
  const [counter, setCounter] = useState (0);
  let increment = () => {
    setCounter (c => c + 1);
  };

  return (
    <div>
      <div className="container">
        <h5 className="counter-text">{counter}</h5>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default UseState1;
