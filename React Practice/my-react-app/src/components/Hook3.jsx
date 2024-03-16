/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

let Hook3 = () => {
  const [emp, setEmp] = useState ({
    designation: 'SE',
    salary: 30000,
    isActive: true,
  });

  let update = e => {
    console.log (e);
    setEmp (emp => ({...emp, salary: emp.salary + 10000}));
  };

  return (
    <div>
      <p>Designation : {emp.designation}</p>
      <p>Salary : {emp.salary}</p>
      <p>Active : {emp.isActive ? 'Yes' : 'No'}</p>
      <button onClick={e => update (e)}>Update</button>
    </div>
  );
};

export default Hook3;
