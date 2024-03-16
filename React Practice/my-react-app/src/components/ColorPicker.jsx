/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

let ColorPicker = () => {
  const [color, setColor] = useState ('#FFFFFF');

  let updateColor = e => {
    setColor (e.target.value);
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <div className="color-display" style={{color: color}}>
        <p>Selected color : {color}</p>
      </div>
      <label htmlFor="">Select a color : </label>
      <input type="color" value={color} onChange={e => updateColor (e)} />
    </div>
  );
};

export default ColorPicker;
