import React from 'react';
import Proptypes from 'prop-types';

const Navbar = props =>
  props.loggedIn ? <button onClick={props.logout}>Logout</button> : <div />;

Navbar.propTypes = {
  loggedIn: Proptypes.bool.isRequired,
  logout: Proptypes.func.isRequired
};

export default Navbar;
