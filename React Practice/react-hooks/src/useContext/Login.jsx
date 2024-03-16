/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {useContext} from 'react';
import {Context} from './UseContext1';

const Login = () => {
  const {setUsername} = useContext (Context);
  return (
    <div>
      <input type="text" onChange={e => setUsername (e.target.value)} />
    </div>
  );
};

export default Login;
