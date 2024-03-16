/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../styles/form.module.css';

const UserNameField = ({userName, setUserName, userNameRef}) => {
  if (
    userName != null &&
    userName != '' &&
    userNameRef != null &&
    userNameRef.current != null
  ) {
    userNameRef.current.style.borderColor = 'rgba(255, 255, 255, 0.5)';
  }
  let handleUserName = e => {
    setUserName (e.target.value);
  };

  return (
    <div className={styles.section}>
      <label htmlFor="userName" className={styles.label}>
        <span>U</span>SER <span>N</span>AME
      </label>
      <input
        ref={userNameRef}
        type="text"
        value={userName}
        onChange={e => handleUserName (e)}
        placeholder="e.g. Achinta Mitra"
        className={styles.input}
      />
    </div>
  );
};

export default UserNameField;
