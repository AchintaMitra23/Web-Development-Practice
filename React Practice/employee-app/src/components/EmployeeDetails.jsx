/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {GET_BY_ID} from '../routes/empRoute';
import styles from '../styles/employeedetails.module.css';
import EmployeeDetailHeader from './EmployeeDetailHeader';
import ProjectList from './ProjectList';
import Button from './Button';

const EmployeeDetails = ({employeeID, setEmployees, position}) => {
  const [employeeDetails, setEmployeeDetails] = useState ({});
  const [isLoading, setIsLoading] = useState (true);

  useEffect (
    () => {
      if (employeeID !== '') {
        fetch (GET_BY_ID + employeeID)
          .then (res => res.json ())
          .then (data => {
            setEmployeeDetails (data);
          })
          .catch (error => console.log (error));
      }
      setIsLoading (false);
    },
    [employeeID]
  );

  return (
    <div className={styles.employeeDetails}>
      {!isLoading
        ? <div>
            <EmployeeDetailHeader employeeDetails={employeeDetails} />
            <ProjectList projects={employeeDetails.projects} />
            <div className={styles.deleteBtn}>
              <Button
                mode="DELETE"
                employeeID={employeeID}
                setEmployees={setEmployees}
                position={position}
              />
            </div>
          </div>
        : <div>
            Loading...
          </div>}
    </div>
  );
};

export default EmployeeDetails;
