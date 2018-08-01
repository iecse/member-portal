import React from 'react';
import PropTypes from 'prop-types';

const Home = props => (
  <div>
    Home<button
      onClick={() => {
        props.history.push('/events');
      }}
    >
      Events
    </button>
  </div>
);

Home.propTypes = {
  history: PropTypes.object
};

export default Home;
