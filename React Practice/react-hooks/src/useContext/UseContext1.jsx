/* eslint-disable no-unused-vars */
import React from 'react';
import {useState} from 'react';
import Login from './Login';
import User from './User';
import {createContext} from 'react';

export const Context = createContext (null);

const UseContext1 = () => {
  const [username, setUsername] = useState ('');
  return (
    <div>
      <Context.Provider value={{username, setUsername}}>
        <Login />
        <User />
      </Context.Provider>
    </div>
  );
};

export default UseContext1;
