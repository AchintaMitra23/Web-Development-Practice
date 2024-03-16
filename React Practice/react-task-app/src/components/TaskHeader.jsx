/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../styles/taskheader.module.css';
import { DELETE_USER_BY_ID } from '../routes/App.routes';
import cx from 'classnames';

const TaskHeader = ({
  setUserID,
  setTasks,
  userID,
  setOpenCreateTaskDialog,
  setOpenUserProfileDialog,
}) => {
  let handleLogout = () => {
    setUserID (null);
    setTasks ([]);
  };

  let handleDeleteAccount = async () => {
    await fetch (DELETE_USER_BY_ID + userID, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then (res => res.json ())
      .then (data => {
        if (data.message == 'SUCCESS') {
          setUserID (null);
          setTasks ([]);
        }
      })
      .catch (error => console.log (error));
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="../../logo.jpg" alt="logo" />
        <span>Task App</span>
      </div>
      <div className={styles.buttons}>
        <button className={cx(styles.btns, styles.logout)} onClick={e => handleLogout (e)}>
          <i className="fa-solid fa-right-from-bracket" />
        </button>
        <button className={cx(styles.btns, styles.delete)} onClick={e => handleDeleteAccount (e)}>
          <i className="fa-solid fa-trash" />
        </button>
        <button
          className={cx(styles.btns, styles.user)}
          onClick={() => setOpenUserProfileDialog (true)}
        >
          <i className="fa-solid fa-user" />
        </button>
        <button
          className={cx(styles.btns, styles.folder)}
          onClick={() => setOpenCreateTaskDialog (true)}
        >
          <i className="fa-solid fa-folder-plus" />
        </button>
      </div>
    </div>
  );
};

export default TaskHeader;
