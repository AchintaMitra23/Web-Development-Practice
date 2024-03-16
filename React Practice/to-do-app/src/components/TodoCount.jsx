/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './../styles/todocount.module.css';

const TodoCount = ({totalCount, completedCount}) => {
  return (
    <div className={styles.footheader}>
      <div className={styles.items}>
        <h4 className={styles.item}>Total Todo(s) : {totalCount}</h4>
        <h4 className={styles.item}>Completed Todo(s) : {completedCount}</h4>
      </div>
    </div>
  );
};

export default TodoCount;
