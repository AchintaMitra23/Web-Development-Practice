/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import './../styles/TodoList.css';

let TodoList = () => {
  const [task, setTask] = useState ([]);
  const [newTask, setNewTask] = useState ('');

  let handleInputChange = e => {
    setNewTask (nT => (nT = e.target.value));
  };

  let addTask = () => {
    if (newTask !== null && newTask !== undefined && newTask.trim () !== '') {
      setTask (t => [...t, newTask]);
      setNewTask (nt => (nt = ''));
    }
  };

  let deleteTask = index => {
    setTask (t => t.filter ((_, i) => i !== index));
  };

  let moveTaskUp = index => {
    if (index > 0) {
      let updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTask (updatedTasks);
    }
  };

  let moveTaskDown = index => {
    if (index < task.length - 1) {
      let updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTask (updatedTasks);
    }
  };

  return (
    <div className="todo-list">
      <h1 className="todo-header">To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={e => handleInputChange (e)}
        />
        <button className="btn btn-warning add-btn" onClick={() => addTask ()}>
          ➕
        </button>
        <ul>
          {task.length == 0
            ? <h2 className="empty-header">Nothing To Display</h2>
            : task.map ((t, index) => (
                <li key={index}>
                  <div style={{display: 'inline-flex', width: '100%'}}>
                    <span>{t}</span>
                    <div className="btn-area">
                      <button
                        className="btn btn-danger delete-btn"
                        onClick={() => deleteTask (index)}
                      >
                        🗑️
                      </button>
                      <button
                        className="btn btn-info move-up"
                        onClick={() => moveTaskUp (index)}
                      >
                        👆
                      </button>
                      <button
                        className="btn btn-info move-down"
                        onClick={() => moveTaskDown (index)}
                      >
                        👇
                      </button>
                    </div>
                  </div>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
