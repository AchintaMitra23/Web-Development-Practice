/* eslint-disable no-unused-vars */
import React from 'react';
import {useRef} from 'react';
import {useLayoutEffect} from 'react';
import {useEffect} from 'react';

const UseLayoutEffect1 = () => {
  const inputRef = useRef ('');

  useLayoutEffect (() => {
    console.log (inputRef.current.value);
  });

  useEffect (() => {
    inputRef.current.value = 'Hello';
  });

  return (
    <div>
      <input type="text" name="name" id="name" ref={inputRef} value="achinta" />
    </div>
  );
};

export default UseLayoutEffect1;
