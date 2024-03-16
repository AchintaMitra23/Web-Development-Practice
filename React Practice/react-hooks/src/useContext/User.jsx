/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {useContext} from 'react';
import {Context} from './UseContext1';

const User = () => {
  const {username} = useContext (Context);
  return (
    <div>
      User: {username}
    </div>
  );
};

export default User;
