/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../styles/employeedetailsheader.module.css';

const EmployeeDetailHeader = ({employeeDetails}) => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <h2 className={styles.name}>{employeeDetails.fullname}</h2>
        <img
          src={employeeDetails.image}
          alt="profile photo"
          className={styles.image}
        />
      </div>
      <hr />
      <div className={styles.details}>
        <div className={styles.detailsDesc}>
          <h4 className={styles.designationTitle}>Designation</h4>
          <h4 className={styles.designationText}>
            {employeeDetails.designation}
          </h4>
        </div>
        <div className={styles.detailsDesc}>
          <h6 className={styles.email}>📧 {employeeDetails.email}</h6>
          <h6 className={styles.phone}>📞 +91 {employeeDetails.contact}</h6>
          <h6 className={styles.salary}>
            💲 {employeeDetails.salary} <strong>Rs./Month</strong>
          </h6>
          <h6 className={styles.salary}>
            💰 {employeeDetails.salary * 12} <strong>Rs./Annum</strong>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailHeader;
