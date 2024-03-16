/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Employee from './Employee';
import styles from '../styles/employeelist.module.css';

const EmployeeList = ({employees, setEmployeeID, setEmployees}) => {
  return (
    <div className={styles.conatiner}>
      {employees.length > 0 ?
        employees.map(emp => {
        return (
          <div key={emp._id}>
            <Employee employee={emp} setEmployeeID={setEmployeeID} setEmployees={setEmployees} />
          </div>
        );
      }) : <span>Nothing to show...</span>}
    </div>
  );
};

export default EmployeeList;
