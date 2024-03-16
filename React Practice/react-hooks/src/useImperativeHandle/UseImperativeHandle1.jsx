/* eslint-disable no-unused-vars */
import React from 'react';
import Button from './Button';
import {useRef} from 'react';

const UseImperativeHandle1 = () => {
  const buttonRef = useRef (null);
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle ();
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default UseImperativeHandle1;
