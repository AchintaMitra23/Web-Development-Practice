/* eslint-disable react/prop-types */
import profile_pic from './../assets/profile-pic.jpeg';
import PropTypes from 'prop-types';

let Card = props => {
  return (
    <div className="card">
      <img
        src={profile_pic}
        alt="Profile Pic"
        style={{
          height: 'auto',
          maxWidth: '50%',
          borderRadius: '50%',
          margin: '10px',
        }}
      />
      <h2 className="card-title">{props.title} Section {props.subscribe}</h2>
      <p className="card-subtitle">{props.subtitle}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  subscribe: PropTypes.number,
  subtitle: PropTypes.string,
};

Card.defaultProps = {
  title: 'Test',
  subscribe: 0,
  subtitle: 'Test Desc',
};
export default Card;
