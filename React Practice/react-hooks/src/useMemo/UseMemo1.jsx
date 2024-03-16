/* eslint-disable no-unused-vars */
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios';
import {useMemo} from 'react';

const UseMemo1 = () => {
  const [data, setData] = useState (null);
  const [toggle, setToggle] = useState (false);

  useEffect (() => {
    axios
      .get ('https://jsonplaceholder.typicode.com/comments')
      .then (res => {
        setData (res.data);
      })
      .catch (error => console.log (error));
  }, []);

  const findLongestName = comments => {
    if (!comments) return null;
    else {
      let longestName = '';
      for (let obj of comments) {
        if (obj.name.length > longestName.length) {
          longestName = obj.name;
        }
      }
      console.log ('Computation');
      return longestName;
    }
  };

  const getLongestName = useMemo (() => findLongestName (data), [data]);

  return (
    <div>
      {getLongestName}
      <br />
      <button onClick={e => setToggle (!toggle)}>Toggle</button>
      {toggle && <h4>Toggle</h4>}
    </div>
  );
};

export default UseMemo1;
