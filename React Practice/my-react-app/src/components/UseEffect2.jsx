/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

let UseEffect2 = () => {
  const [width, setWidth] = useState (document.documentElement.clientWidth);
  const [height, setHeight] = useState (document.documentElement.clientHeight);

  useEffect (
    () => {
      window.addEventListener ('resize', () => {
        setWidth (w => (w = document.documentElement.clientWidth));
        setHeight (h => (h = document.documentElement.clientHeight));
      });

      return () => {
        window.removeEventListener ('resize', () => {
          setWidth (w => (w = document.documentElement.clientWidth));
          setHeight (h => (h = document.documentElement.clientHeight));
        });
      };
    },
    []
  );

  useEffect(() => {
    document.title = `Width : ${width}, Height : ${height}`;
  }, [width, height]);

  return (
    <div>
      <p>Width : {width}</p>
      <p>Height : {height}</p>
    </div>
  );
};

export default UseEffect2;
