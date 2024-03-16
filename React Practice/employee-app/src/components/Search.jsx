/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import styles from '../styles/search.module.css';
import {GET_ALL, GET_BY_POSITION} from '../routes/empRoute';

const Search = ({setEmployees, position, setPosition}) => {
  useEffect (
    () => {
      fetch (position === '' ? GET_ALL : GET_BY_POSITION + position)
        .then (res => res.json ())
        .then (data => {
          if (data && data.length > 0) {
            setEmployees (data);
          }
        })
        .catch (error => console.log (error));
    },
    [position]
  );

  let handleInputChange = e => {
    setPosition (e.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.searchInput}
        placeholder="Please enter the designation"
        type="text"
        value={position}
        onChange={e => handleInputChange (e)}
      />
    </div>
  );
};

export default Search;
