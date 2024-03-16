/* eslint-disable no-unused-vars */
import React from 'react';

const EventHandler = () => {
  let handleClick = () => {
    alert ('On Click...');
  };

  let handleHover = () => {
    alert ('Mouse Hover...');
  };

  return (
    <div>
      <button className="btn" onClick={handleClick} onMouseOver={handleHover}>
        Click Me
      </button>
    </div>
  );
};

export default EventHandler;
