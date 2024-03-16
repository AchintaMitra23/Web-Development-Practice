/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './../styles/todoitems.module.css';

const TodoItems = ({todoList, setTodoList}) => {
  let deleteItem = todoName => {
    todoList = todoList.filter (todoItem => todoItem.name !== todoName);
    setTodoList (todoList);
  };

  let handleComplete = todoName => {
    let object = todoList.filter (todoItem => todoItem.name === todoName)[0];
    todoList = todoList.filter (todoItem => todoItem.name !== todoName);
    object.isDone = !object.isDone;
    todoList.push (object);
    setTodoList (todoList);
  };

  return (
    <div className={styles.list}>
      <div className={styles.element}>
        {todoList.length === 0
          ? <h4 className={styles.emptyhead}>
              Nothing to show.....
            </h4>
          : <div className={styles.elementlist}>
              {todoList.map ((todo, index) => (
                <div key={index} className={styles.elementItem}>
                  <span
                    className={todo.isDone ? styles.completed : styles.normal}
                    onClick={() => handleComplete (todo.name)}
                  >
                    {todo.name}
                  </span>
                  <button
                    className={styles.crossbtn}
                    onClick={() => deleteItem (todo.name)}
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>}
      </div>
    </div>
  );
};

export default TodoItems;
