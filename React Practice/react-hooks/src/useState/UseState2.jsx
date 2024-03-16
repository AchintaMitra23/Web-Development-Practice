/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

const UseState2 = () => {
  const [name, setName] = useState ('');
  let handleName = e => {
    setName (n => (n = e.target.value));
  };

  return (
    <div>
      <div className="container">
        <h5 className="counter-text">{name}</h5>
        <input
          type="text"
          name="name"
          id="name"
          onChange={e => handleName (e)}
          value={name}
          placeholder="Enter the name..."
        />
      </div>
    </div>
  );
};

export default UseState2;
