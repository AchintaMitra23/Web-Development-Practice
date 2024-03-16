/* eslint-disable no-unused-vars */
import React from 'react';
import {DELETE_BY_ID, GET_ALL, GET_BY_POSITION} from '../routes/empRoute';

const Button = ({mode, employeeID, setEmployeeID, setEmployees, position}) => {
  let handleViewDetails = _id => {
    setEmployeeID (_id);
  };

  let handleDeleteEmployee = _id => {
    fetch (DELETE_BY_ID + _id, {method: 'delete'})
      .then (res => res.json ())
      .then (data => {
        if (data) {
          fetchEmployee ();
        }
      })
      .catch (error => console.log (error));
  };

  let fetchEmployee = () => {
    fetch (position === '' ? GET_ALL : GET_BY_POSITION + position)
      .then (res => res.json ())
      .then (data => {
        if (data && data.length > 0) {
          setEmployees (data);
        }
      })
      .catch (error => console.log (error));
  };

  let viewButton = (
    <div>
      <button
        className="btn btn-success fw-bold"
        onClick={() => handleViewDetails (employeeID)}
      >
        View Details
      </button>
    </div>
  );
  let deleteButton = (
    <div>
      <button
        className="btn btn-danger fw-bold"
        onClick={() => handleDeleteEmployee (employeeID)}
      >
        Delete
      </button>
    </div>
  );

  let result = null;

  if (mode === 'VIEW') {
    result = viewButton;
  } else if (mode === 'DELETE') {
    result = deleteButton;
  }
  return result;
};

export default Button;
