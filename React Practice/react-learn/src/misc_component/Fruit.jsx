/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Fruit = ({emoji, name, price}) => {
  return (
    <div>
      <h1>{emoji}</h1>
      <h4>Name - {name}</h4>
      <h5>Price - {price}Rs./kg</h5>
    </div>
  );
};

export default Fruit;
