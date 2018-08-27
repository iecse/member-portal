import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './navbar.scss';

class Navbar extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    type: PropTypes.number.isRequired,
    userDetails: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  };

  state = { active: location.pathname };

  render() {
    return this.props.loggedIn ? (
      <div className="navbar-container">
        <div className="card">
          <img
            className="logo"
            src="https://iecsemanipal.com/images/logos/iecse-logo-white.png"
          />
          <div className="navbar">
            <button
              className={this.state.active === '/' ? 'active' : ''}
              onClick={() => {
                this.props.history.push('/');
                this.setState({ active: '/' });
              }}
            >
              Home
            </button>
            <button
              className={this.state.active === '/events' ? 'active' : ''}
              onClick={() => {
                this.props.history.push('/events');
                this.setState({ active: '/events' });
              }}
            >
              Events
            </button>
            {this.props.type > 1 && (
              <button
                className={this.state.active === '/register' ? 'active' : ''}
                onClick={() => {
                  this.props.history.push('/register');
                  this.setState({ active: '/register' });
                }}
              >
                Register
              </button>
            )}
            <button onClick={this.props.logout}>Log Out</button>
          </div>
          <div className="greeting">
            Hello {this.props.userDetails.name.split(' ')[0]}.
          </div>
          <div className="greeting-sub">
            Welcome to the IECSE member portal.
          </div>
        </div>
      </div>
    ) : (
      <div />
    );
  }
}

export default withRouter(Navbar);
