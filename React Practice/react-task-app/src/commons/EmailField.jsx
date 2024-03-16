/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../styles/form.module.css';

const EmailField = ({email, setEmail, emailRef}) => {
  if (
    email != null &&
    email != '' &&
    emailRef != null &&
    emailRef.current != null
  ) {
    emailRef.current.style.borderColor = 'rgba(255, 255, 255, 0.5)';
  }
  let handleEmail = e => {
    setEmail (e.target.value);
  };

  return (
    <div className={styles.section}>
      <label htmlFor="email" className={styles.label}>
        <span>E</span>MAIL <span>I</span>D.
      </label>
      <input
        ref={emailRef}
        type="email"
        value={email}
        onChange={e => handleEmail (e)}
        placeholder="e.g. achinta.mitra98@gmail.com"
        className={styles.input}
      />
    </div>
  );
};

export default EmailField;
