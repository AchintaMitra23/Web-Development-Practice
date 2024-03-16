/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../styles/projectdetails.module.css';

const ProjectDetails = ({project}) => {
  let calculateYearlyDuration = number => {
    let years = Math.floor(number / 12);
    let months = number % 12;
    return `${padZero(years)} Year(s) ${padZero(months)} Month(s)`;
  };

  let padZero = number => {
    return (number < 10 ? '0' : '') + number;
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={project.image} alt="project logo" className={styles.image} />
      </div>
      <div className={styles.descContainer}>
        <h6>Name : <span className={styles.desc}>{project.name}</span></h6>
        <h6>Duration : <span className={styles.desc}>{calculateYearlyDuration(project.duration)}</span></h6>
        <h6>Reporting Manager : <span className={styles.desc}>{project.manager}</span></h6>
      </div>
    </div>
  );
};

export default ProjectDetails;
