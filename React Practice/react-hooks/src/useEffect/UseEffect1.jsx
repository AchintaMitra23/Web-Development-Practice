/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import axios from 'axios';
import {useState} from 'react';

const UseEffect1 = () => {
  const [data, setData] = useState ('');

  useEffect (
    () => {
      axios
        .get ('https://jsonplaceholder.typicode.com/comments')
        .then (res => setData (d => (d = res.data[0].email)))
        .catch (error => console.log (error));
    },
    [data]
  );

  return (
    <div>
      Hello {data}
    </div>
  );
};

export default UseEffect1;
