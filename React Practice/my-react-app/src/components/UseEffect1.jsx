/* eslint-disable no-unused-vars */
import React, {useState, useEffects, useEffect} from 'react';

let UseEffect1 = () => {
  const [count, setCount] = useState (0);
  useEffect (
    () => {
      document.title = `Count : ${count}`;
    },
    [count]
  );

  let addCount = () => {
    setCount (c => c + 1);
  };

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => addCount ()}>Add</button>
    </div>
  );
};

export default UseEffect1;
