/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import styles from '../styles/userprofile.module.css';
import {GET_USER_BY_ID} from '../routes/App.routes';

const UserProfile = ({
  openUserProfileDialog,
  setOpenUserProfileDialog,
  userID,
}) => {
  const [user, setUser] = useState (null);
  let handleClose = e => {
    setOpenUserProfileDialog (false);
  };

  useEffect (
    () => {
      fetchUserByID (userID);
    },
    [userID]
  );

  let fetchUserByID = async userID => {
    await fetch (GET_USER_BY_ID + userID)
      .then (res => res.json ())
      .then (data => {
        if (data.message == 'SUCCESS') {
          setUser (data.value);
        }
      })
      .catch (error => console.log (error));
  };

  return (
    <div className={styles.container}>
      <Dialog onClose={handleClose} open={openUserProfileDialog}>
        <DialogTitle> User Profile </DialogTitle>
        <h6 className={styles.heading}>
          Registered User : {user ? user.username : null}
        </h6>
        <div className={styles.form}>
          <div className={styles.inputSection}>
            <label htmlFor="">User ID</label>
            <input type="text" value={user ? user._id : null} disabled={true} />
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="">User Name</label>
            <input
              type="text"
              value={user ? user.username : null}
              placeholder="Please enter username..."
              disabled={true}
            />
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="">Email ID</label>
            <input
              type="email"
              value={user ? user.email : null}
              placeholder="Please enter email id..."
              disabled={true}
            />
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="">Password</label>
            <input
              type="password"
              value={user ? user.password : null}
              placeholder="Please enter password..."
              disabled={true}
            />
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="">Contact No.</label>
            <input
              type="text"
              value={user ? user.contact : null}
              placeholder="Please enter contact no..."
              disabled={true}
            />
          </div>
        </div>
        <br />
        <div className={styles.buttons}>
          <button className={styles.cancelBtn} onClick={e => handleClose (e)}>
            Cancel
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default UserProfile;
