/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import styles from './../styles/todoinput.module.css';

const TodoInput = ({setTodoList}) => {
  const [newItem, setNewItem] = useState ({name: '', isDone: false});

  let addTodo = e => {
    e.preventDefault ();
    setTodoList (t => [...t, newItem]);
    setNewItem ({name: '', isDone: false});
  };

  return (
    <div className={styles.inputdiv}>
      <form onSubmit={e => addTodo (e)} className={styles.form}>
        <div style={{display: 'flex'}}>
          <input
            className={styles.input}
            type="text"
            placeholder="Please enter your todo item"
            value={newItem.name}
            onChange={e =>
              setNewItem (n => ({name: e.target.value, isDone: false}))}
          />
          <button type="submit" className={styles.submit}>➕</button>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
