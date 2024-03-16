/* eslint-disable no-unused-vars */
import React from 'react';
import {useState} from 'react';
import Child from './Child';
import {useCallback} from 'react';

const UseCallback1 = () => {
  const [data, setData] = useState ('Hello ');
  const [toggle, setToggle] = useState (false);

  const returnComment = useCallback (
    name => {
      return data + name;
    },
    [data]
  );

  return (
    <div>
      <Child returnComment={returnComment} />
      <button onClick={() => setToggle (!toggle)}>Toggle</button>
      {toggle && <h4>Toggle</h4>}
    </div>
  );
};

export default UseCallback1;
