/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../styles/employee.module.css';
import Button from './Button';

const Employee = ({employee, setEmployeeID, setEmployees}) => {

  return (
    <div className={styles.card}>
      <img className={styles.image} src={employee.image} alt="" />
      <div className={styles.body}>
        <h5 className={styles.name}>{employee.fullname}</h5>
        <p className={styles.email}>{employee.email}</p>
        <Button mode="VIEW" employeeID={employee._id} setEmployeeID={setEmployeeID} setEmployees={setEmployees} />
      </div>
    </div>
  );
};

export default Employee;
