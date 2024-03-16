/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../styles/form.module.css';

const ContactField = ({contact, setContact, contactRef}) => {
  if (
    contact != null &&
    contact != '' &&
    contactRef != null &&
    contactRef.current != null
  ) {
    contactRef.current.style.borderColor = 'rgba(255, 255, 255, 0.5)';
  }
  let handleContact = e => {
    setContact (e.target.value);
  };

  return (
    <div className={styles.section}>
      <label htmlFor="contact" className={styles.label}>
        <span>C</span>ONTACT <span>N</span>o.
      </label>
      <input
        ref={contactRef}
        type="text"
        value={contact}
        onChange={e => handleContact (e)}
        placeholder="e.g. +91 000-0000-000"
        className={styles.input}
      />
    </div>
  );
};

export default ContactField;
