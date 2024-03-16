/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useRef} from 'react';

let ComponentRef1 = () => {
  // let [num, setNum] = useState (0);
  const ref = useRef (null);

  useEffect (() => {
    console.log ('Component Renders');
    console.log (ref);
  });

  let handleClick = () => {
    // setNum (n => n + 1);
    ref.current.focus ();
  };

  return (
    <div>
      <button onClick={() => handleClick ()}>Click Me</button>
      <input type="text" ref={ref} />
    </div>
  );
};

export default ComponentRef1;
