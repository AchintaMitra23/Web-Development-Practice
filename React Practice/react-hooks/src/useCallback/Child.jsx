/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {useEffect} from 'react';

const Child = ({returnComment}) => {
  useEffect (
    () => {
      console.log ('Child Called...');
    },
    [returnComment]
  );

  return (
    <div>
      {returnComment ('Achinta')}
    </div>
  );
};

export default Child;
