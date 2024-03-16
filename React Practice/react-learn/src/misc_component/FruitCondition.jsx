/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const FruitCondition = ({emoji, name, price}) => {
  // if (price > 40) {
  //   return (
  //     <div>
  //       <h1>{emoji}</h1>
  //       <h4>Name - {name}</h4>
  //       <h5>Price - {price}Rs./kg</h5>
  //     </div>
  //   );
  // }
  return (
    <div>
      {price > 40 &&
        <div>
          <h1>{emoji}</h1>
          <h4>Name - {name}</h4>
          <h5>Price - {price}Rs./kg</h5>
        </div>}
    </div>
  );
};

export default FruitCondition;
