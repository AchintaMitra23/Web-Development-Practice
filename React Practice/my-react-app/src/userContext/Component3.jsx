/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import {UserContext} from './Component1';
import Component4 from './Component4';

let Component3 = () => {
  const user = useContext (UserContext);

  return (
    <div className="box">
      <h1>Component3</h1>
      <h6>{`Hello ${user}`}</h6>
      <UserContext.Provider value={user}>
        <Component4 />
      </UserContext.Provider>
    </div>
  );
};

export default Component3;
