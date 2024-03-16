/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

let Hook4 = () => {
  const [food, setFood] = useState (['Apple', 'Orange', 'Banana']);
  let listOfFoods = food.map ((food, index) => (
    <li key={index} onClick={() => deleteFood (food)}>
      {food}
    </li>
  ));
  const [val, setVal] = useState ('');

  let addFood = e => {
    setFood (food => [...food, val]);
    setVal (v => (v = ''));
  };

  let deleteFood = f => {
    setFood (food.filter (f1 => f1 !== f));
  };

  let updateVal = e => {
    setVal (v => (v = e.target.value));
  };

  return (
    <div>
      <ul style={{listStyle: 'none'}}>{listOfFoods}</ul>
      <input
        type="text"
        placeholder="Enter Food"
        value={val}
        onChange={e => updateVal (e)}
      />
      <button onClick={e => addFood (e)}>Add</button>
    </div>
  );
};

export default Hook4;
