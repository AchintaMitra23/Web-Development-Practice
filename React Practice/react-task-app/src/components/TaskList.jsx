/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({userID, tasks, setTasks, setOpenCreateTaskDialog, setTaskID}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {tasks.map ((task, index) => {
          return (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 text-center">
              <TaskItem
                userID={userID}
                task={task}
                setTasks={setTasks}
                setOpenCreateTaskDialog={setOpenCreateTaskDialog}
                setTaskID={setTaskID}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
