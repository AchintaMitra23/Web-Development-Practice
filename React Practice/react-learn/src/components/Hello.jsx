/* eslint-disable no-unused-vars */
import React from 'react';

const Hello = () => {
  const name = 'Achinta';
  let displayMessage = () => {
    return 'Learning React';
  };
  return (
    <div>
      <h3>Hello {name}</h3>
      <h5>{displayMessage ()}</h5>
    </div>
  );
};

export default Hello;
