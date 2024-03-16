/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
// destructuring Props
// const {name, message} = props;

const Prop = ({name, message, age, seatNumber}) => {
  return (
    <div>
      <h3>{message} {name}</h3>
      <h5>Age: {age}</h5>
      <h6>{seatNumber[2]}</h6>
      <hr />
    </div>
  );
};

Prop.propTypes = {
  message: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.number,
  seatNumber: PropTypes.array,
};

Prop.defaultProps = {
  message: 'Bonjour',
  name: 'Jidane',
  age: 33,
  seatNumber: [0, 0, 0, 0, 0],
};

export default Prop;
