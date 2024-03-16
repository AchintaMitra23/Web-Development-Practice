/* eslint-disable no-unused-vars */
import React, {useState, createContext} from 'react';
import Component2 from './Component2';

export const UserContext = createContext ();

let Component1 = () => {
  const [user, setUser] = useState ('Achinta');

  return (
    <div className="box">
      <h1>Component1</h1>
      <h6>{`Hello ${user}`}</h6>
      <UserContext.Provider value={user}>
        <Component2 />
      </UserContext.Provider>
    </div>
  );
};

export default Component1;
