/* eslint-disable no-unused-vars */
import {useState} from 'react';

let UpdateArrayOfObjects = () => {
  const [emp, setEmp] = useState ([
    {designation: 'Manager', salary: 50000, isActive: true},
  ]);
  let [val, setVal] = useState ('');
  let list = emp.map ((e, index) => (
    <li key={index} onClick={() => deleteEmployee (index)}>
      Designation:
      {' '}
      {e.designation}
      , Salary:
      {' '}
      {e.salary}
      , isActive:
      {' '}
      {e.isActive ? 'Yes' : 'No'}
    </li>
  ));

  let changeVal = e => {
    setVal (() => (val = e.target.value));
  };

  let addEmployee = () => {
    let newDesgn = document.getElementById ('desgn').value;
    let newSal = document.getElementById ('sal').value;
    let newEmp = {
      designation: newDesgn,
      salary: newSal,
      isActive: val === 'Yes' ? true : false,
    };
    setEmp (e => [...e, newEmp]);
    document.getElementById ('desgn').value = '';
    document.getElementById ('sal').value = 0;
    setVal ('');
  };

  let deleteEmployee = index => {
    setEmp (e => e.filter ((_, i) => i !== index));
  };

  return (
    <div>
      <ul>{list}</ul>
      <input
        type="text"
        name="desgn"
        id="desgn"
        placeholder="Enter Designation"
      />
      {' '}
      <br />
      <br />
      <input type="number" name="sal" id="sal" placeholder="Enter Salary" />
      {' '}
      <br />
      <br />
      <label htmlFor="">
        <input
          type="radio"
          value="Yes"
          checked={val === 'Yes'}
          onChange={e => changeVal (e)}
        />
        Yes
      </label>
      <label htmlFor="">
        <input
          type="radio"
          value="No"
          checked={val === 'No'}
          onChange={e => changeVal (e)}
        />
        No
      </label> <br />
      <button onClick={() => addEmployee ()}>Add</button>
    </div>
  );
};

export default UpdateArrayOfObjects;
