/* eslint-disable no-unused-vars */
import React from 'react';
import {useRef} from 'react';

const UseRef1 = () => {
  const inputRef = useRef (null);
  let onClick = () => {
    // console.log (inputRef.current.value);
    inputRef.current.focus();
  };

  return (
    <div>
      <h3>Hello</h3>
      <input
        ref={inputRef}
        type="text"
        name="name"
        id="name"
        placeholder="Please enter name..."
      />
      <button onClick={() => onClick ()}>Change Name</button>
    </div>
  );
};

export default UseRef1;
