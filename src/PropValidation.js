import React from 'react';
import PropTypes from 'prop-types';


// Installed PropTypes
function PersonComponent({ name, age, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  );
}

PersonComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  email: PropTypes.string.isRequired,
};

export default  PersonComponent;
