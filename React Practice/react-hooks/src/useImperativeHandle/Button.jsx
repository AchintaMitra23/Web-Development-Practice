/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React from 'react';
import {useImperativeHandle} from 'react';
import {forwardRef} from 'react';
import {useState} from 'react';

const Button = forwardRef ((props, ref) => {
  const [toggle, setToggle] = useState (false);
  useImperativeHandle (ref, () => ({
    alterToggle () {
      setToggle (!toggle);
    },
  }));
  // let clickToggle = () => {
  //   setToggle (!toggle);
  // };

  return (
    <div>
      <button>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </div>
  );
});

export default Button;
