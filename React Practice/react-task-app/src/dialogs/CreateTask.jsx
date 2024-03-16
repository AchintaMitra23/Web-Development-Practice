/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useEffect, useRef, useState} from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import styles from '../styles/createtask.module.css';
import {
  CREATE_TASK,
  GET_TASK_BY_ID,
  GET_TASK_BY_USER,
  UPDATE_TASK_BY_ID,
} from '../routes/App.routes';

const CreateTask = ({
  openCreateTaskDialog,
  setOpenCreateTaskDialog,
  userID,
  setTasks,
  taskID,
  setTaskID,
}) => {
  const [title, setTitle] = useState ('');
  const [description, setDescription] = useState ('');

  const titleRef = useRef ('');

  let handleClose = e => {
    setTaskID (null);
    setOpenCreateTaskDialog (false);
  };

  let handleCreateNewTask = async e => {
    if (title == null || title == '') {
      titleRef.current.style.borderColor = 'red';
    } else {
      const request = {
        title: title.trim (),
        description: description.trim (),
        userId: userID,
      };
      await fetch (CREATE_TASK, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify (request),
      })
        .then (res => res.json ())
        .then (data => {
          if (data.message == 'SUCCESS') {
            setTaskID (null);
            setOpenCreateTaskDialog (false);
            fetchTasksByUser ();
          }
        })
        .catch (error => console.log (error));
    }
  };

  let handleEditTask = async e => {
    if (title == null || title == '') {
      titleRef.current.style.borderColor = 'red';
    } else {
      const request = {
        title: title.trim (),
        description: description.trim (),
      };
      await fetch (UPDATE_TASK_BY_ID + taskID, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify (request),
      })
        .then (res => res.json ())
        .then (data => {
          if (data.message == 'SUCCESS') {
            setTaskID (null);
            setOpenCreateTaskDialog (false);
            fetchTasksByUser ();
          }
        })
        .catch (error => console.log (error));
    }
  };

  let fetchTasksByUser = async () => {
    await fetch (GET_TASK_BY_USER + userID)
      .then (res => res.json ())
      .then (data => {
        if (data.message === 'SUCCESS') {
          setTasks (data.value);
        }
      })
      .catch (error => console.log (error));
  };

  useEffect (
    () => {
      if (taskID != undefined && taskID != null) {
        fetchTaskByID ();
      }
    },
    [taskID]
  );

  let fetchTaskByID = async () => {
    console.log (userID);
    await fetch (GET_TASK_BY_ID + taskID)
      .then (res => res.json ())
      .then (data => {
        if (data.message == 'SUCCESS') {
          setTitle (data.value.title);
          setDescription (data.value.description);
        }
      })
      .catch (error => console.log (error));
  };

  return (
    <div className={styles.container}>
      <Dialog onClose={handleClose} open={openCreateTaskDialog}>
        {taskID != null
          ? <DialogTitle> Edit Task </DialogTitle>
          : <DialogTitle> Create New Task </DialogTitle>}
        {taskID != null
          ? <h6 className={styles.heading}>
              Task ID : {' '}
              {taskID}
            </h6>
          : <h6 className={styles.heading}>
              Please provide the task title as it is mandatory field (description is optional)
            </h6>}
        <div className={styles.form}>
          <div className={styles.inputSection}>
            <label htmlFor="">Task Title</label>
            <input
              ref={titleRef}
              type="text"
              value={title}
              onChange={e => {
                if (e.target.value != null && e.target.value != '') {
                  titleRef.current.style.borderColor = 'green';
                } else {
                  titleRef.current.style.borderColor = 'red';
                }
                setTitle (e.target.value);
              }}
              placeholder="Please enter the task title..."
            />
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="">Task Description</label>
            <textarea
              rows={2}
              value={description}
              onChange={e => setDescription (e.target.value)}
              placeholder="Please enter the task description..."
            />
          </div>
        </div>
        <div className={styles.buttons}>
          {taskID != null
            ? <button
                className={styles.createBtn}
                onClick={e => handleEditTask (e)}
              >
                Edit
              </button>
            : <button
                className={styles.createBtn}
                onClick={e => handleCreateNewTask (e)}
              >
                Create
              </button>}
          <button className={styles.cancelBtn} onClick={e => handleClose (e)}>
            Cancel
          </button>
        </div>
      </Dialog>

    </div>
  );
};

export default CreateTask;
