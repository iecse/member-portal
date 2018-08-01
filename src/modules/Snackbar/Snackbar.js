import React from 'react';
import PropTypes from 'prop-types';

const Snackbar = props => <div>{props.message}</div>;

Snackbar.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string
};

export default Snackbar;
