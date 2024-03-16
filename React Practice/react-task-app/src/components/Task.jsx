/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import styles from '../styles/task.module.css';
import {GET_TASK_BY_USER} from '../routes/App.routes';
import TaskHeader from './TaskHeader';
import TaskList from './TaskList';
import CreateTask from '../dialogs/CreateTask';
import UserProfile from '../dialogs/UserProfile';

const Task = ({userID, setUserID}) => {
  const [tasks, setTasks] = useState ([]);
  const [openCreateTaskDialog, setOpenCreateTaskDialog] = useState (false);
  const [openUserProfileDialog, setOpenUserProfileDialog] = useState (false);
  const [taskID, setTaskID] = useState (null);

  useEffect (
    () => {
      fetchTasksByUser ();
    },
    [userID]
  );

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

  return (
    <div>
      {userID
        ? <div className={styles.container}>
            <TaskHeader
              userID={userID}
              setUserID={setUserID}
              setTasks={setTasks}
              openCreateTaskDialog={openCreateTaskDialog}
              setOpenCreateTaskDialog={setOpenCreateTaskDialog}
              openUserProfileDialog={openUserProfileDialog}
              setOpenUserProfileDialog={setOpenUserProfileDialog}
            />
            <TaskList
              userID={userID}
              tasks={tasks.sort ((a, b) => a.completedFlag - b.completedFlag)}
              setTasks={setTasks}
              setOpenCreateTaskDialog={setOpenCreateTaskDialog}
              setTaskID={setTaskID}
            />
            {openCreateTaskDialog
              ? <CreateTask
                  openCreateTaskDialog={openCreateTaskDialog}
                  setOpenCreateTaskDialog={setOpenCreateTaskDialog}
                  userID={userID}
                  setTasks={setTasks}
                  taskID={taskID}
                  setTaskID={setTaskID}
                />
              : null}
            {openUserProfileDialog
              ? <UserProfile
                  openUserProfileDialog={openUserProfileDialog}
                  setOpenUserProfileDialog={setOpenUserProfileDialog}
                  userID={userID}
                />
              : null}
          </div>
        : <div>
            <h1>Sorry...</h1>
          </div>}
    </div>
  );
};

export default Task;
