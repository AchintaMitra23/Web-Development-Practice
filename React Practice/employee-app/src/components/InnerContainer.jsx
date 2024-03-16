/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../styles/innercontainer.module.css';

const InnerContainer = ({children}) => {
  return (
    <div className={styles.conatiner}>
      {children}
    </div>
  );
};

export default InnerContainer;
