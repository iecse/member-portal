import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './navbar.scss';

const Navbar = props =>
  props.loggedIn ? (
    <div className="navbar">
      <button onClick={props.logout}>Logout</button>
      <button
        onClick={() => {
          props.history.push('/');
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          props.history.push('/events');
        }}
      >
        Events
      </button>
    </div>
  ) : (
    <div />
  );

Navbar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Navbar);
