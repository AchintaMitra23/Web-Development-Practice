/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
import React, {useState} from 'react';

let Hook1 = () => {
  let [number, setNumber] = useState (0);
  let incrementNum = () => {
    setNumber (number => number + 1);
  };
  let decrementNum = () => {
    setNumber (number => number - 1);
  };
  let reset = () => {
    setNumber (number => (number = 0));
  };
  return (
    <div>
      <p>Name: {number}</p>
      <button onClick={incrementNum}>Increment</button>
      <button onClick={decrementNum}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Hook1;
