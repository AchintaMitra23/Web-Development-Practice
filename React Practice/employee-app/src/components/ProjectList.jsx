/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../styles/projectlist.module.css';
import ProjectDetails from './ProjectDetails';

const ProjectList = ({ projects = []}) => {
  return (
    <div className={styles.projectDetails}>
      <h3 className={styles.title}>Projects</h3>
      {projects.map((project, index) => {
        return <ProjectDetails key={project.name} project={project} />
      })}
    </div>
  );
};

export default ProjectList;
