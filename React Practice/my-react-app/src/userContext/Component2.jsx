/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import {UserContext} from './Component1';
import Component3 from './Component3';

let Component2 = () => {
  const user = useContext (UserContext);

  return (
    <div className="box">
      <h1>Component2</h1>
      <h6>{`Hello ${user}`}</h6>
      <UserContext.Provider value={user}>
        <Component3 />
      </UserContext.Provider>
    </div>
  );
};

export default Component2;
