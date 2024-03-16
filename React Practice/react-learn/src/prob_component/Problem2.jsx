/* eslint-disable no-self-assign */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

const Problem2 = () => {
  const [arr, setArr] = useState ([
    {name: 'Play Cricket', isChecked: false},
    {name: 'Read Books', isChecked: false},
    {name: 'Pray To God', isChecked: false},
    {name: 'Help Others', isChecked: false},
  ]);
  let handleDelete = (e, val) => {
    setArr (arr.filter (obj => obj.name !== val));
  };
  let checkboxChange = (e, name) => {
    setArr (
      arr.map (
        obj =>
          obj.name === name ? {name: obj.name, isChecked: !obj.isChecked} : obj
      )
    );
  };
  return (
    <div>
      {arr.map ((obj, index) => {
        return (
          <div key={index} style={{display: 'flex', margin: '5px 0'}}>
            <input
              type="checkbox"
              onChange={e => checkboxChange (e, obj.name)}
              checked={obj.isChecked}
            />
            <h3 style={{margin: '0 10px'}}>{obj.name}</h3>
            {obj.isChecked
              ? <button onClick={e => handleDelete (e, obj.name)}>
                  Delete
                </button>
              : ''}
          </div>
        );
      })}
    </div>
  );
};

export default Problem2;
