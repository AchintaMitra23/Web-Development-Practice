/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../styles/taskitem.module.css';
import {
  COMPLETE_TASK_BY_ID,
  DELETE_TASK_BY_ID,
  GET_TASK_BY_USER,
} from '../routes/App.routes';

const TaskItem = ({
  userID,
  task,
  setTasks,
  setOpenCreateTaskDialog,
  setTaskID
}) => {
  let handleCompleteTask = async (e, id) => {
    await fetch (COMPLETE_TASK_BY_ID + id, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then (res => res.json ())
      .then (data => {
        if (data.message == 'SUCCESS') {
          fetchTasksByUser ();
        }
      })
      .catch (error => console.log (error));
  };

  let handleEditTask = (e, id) => {
    setTaskID(id);
    setOpenCreateTaskDialog(true);
  };

  let handleDeleteTask = async (e, id) => {
    await fetch (DELETE_TASK_BY_ID + id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then (res => res.json ())
      .then (data => {
        if (data.message == 'SUCCESS') {
          fetchTasksByUser ();
        }
      })
      .catch (error => console.log (error));
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

  return (
    <div className={styles.container}>
      {task.completedFlag
        ? <div className={styles.textCompleted}>
            <h5 className={styles.titleCompleted}>{task.title}</h5>
            <h6 className={styles.descriptionCompleted}>{task.description}</h6>
          </div>
        : <div className={styles.text}>
            <h5 className={styles.title}>{task.title}</h5>
            <h6 className={styles.description}>{task.description}</h6>
          </div>}
      <div className={styles.buttons}>
        {!task.completedFlag
          ? <button
              onClick={e => handleCompleteTask (e, task._id)}
              className={styles.tick}
              disabled={task.completedFlag}
            >
              <i className="fa-solid fa-check" />
            </button>
          : null}
        {!task.completedFlag
          ? <button
              onClick={e => handleEditTask (e, task._id)}
              className={styles.pen}
              disabled={task.completedFlag}
            >
              <i className="fa-solid fa-pen" />
            </button>
          : null}
        <button
          onClick={e => handleDeleteTask (e, task._id)}
          className={styles.cross}
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
