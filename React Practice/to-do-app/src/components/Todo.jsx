/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import TodoInput from './TodoInput';
import TodoItems from './TodoItems';
import TodoCount from './TodoCount';
import styles from './../styles/todo.module.css';

const Todo = () => {
  const [todoList, setTodoList] = useState ([]);
  const appName = 'TO-DO List';

  todoList.sort ((a, b) => a.isDone - b.isDone);
  let completedTodos = todoList.filter (todo => todo.isDone);

  return (
    <div>
      <h3 className={styles.todohead}>{appName}</h3>
      <TodoInput setTodoList={setTodoList} />
      <TodoItems todoList={todoList} setTodoList={setTodoList} />
      <TodoCount
        totalCount={todoList.length}
        completedCount={completedTodos.length}
      />
    </div>
  );
};

export default Todo;
