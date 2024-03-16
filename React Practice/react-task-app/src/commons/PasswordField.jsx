/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../styles/form.module.css';

const PasswordField = ({password, setPassword, passwordRef}) => {
  if (
    password != null &&
    password != '' &&
    passwordRef != null &&
    passwordRef.current != null
  ) {
    passwordRef.current.style.borderColor = 'rgba(255, 255, 255, 0.5)';
  }
  let handlePassword = e => {
    setPassword (e.target.value);
  };

  return (
    <div className={styles.section}>
      <label htmlFor="password" className={styles.label}>
        <span>P</span>ASSWORD
      </label>
      <input
        ref={passwordRef}
        type="password"
        value={password}
        onChange={e => handlePassword (e)}
        placeholder="e.g. Exclub@12345"
        className={styles.input}
      />
    </div>
  );
};

export default PasswordField;
