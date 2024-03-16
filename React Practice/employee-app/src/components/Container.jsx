/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../styles/container.module.css';

const Container = ({children}) => {
  return (
    <div className={styles.parentContainer}>
      {children}
    </div>
  );
};

export default Container;
