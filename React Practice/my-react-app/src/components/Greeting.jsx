/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
let Greeting = props => {
  return props.isLoggedIn
    ? <h2 style={props.isLoggedIn ? {color: 'green'} : {color: 'red'}}>
        Welcome {props.userName}
      </h2>
    : <h2 style={props.isLoggedIn ? {color: 'green'} : {color: 'red'}}>
        Please Login
      </h2>;
};

Greeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string,
};

Greeting.defaultProps = {
  isLoggedIn: false,
  userName: 'Test',
};
export default Greeting;
