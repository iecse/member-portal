import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './navbar.scss';

class Navbar extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    type: PropTypes.number.isRequired,
    userDetails: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  };

  state = { active: location.pathname, expanded: true, open: false };

  componentDidMount() {
    this.setState({
      active:
        location.pathname === '/' || location.pathname === '/login'
          ? '/'
          : location.pathname,
      expanded: location.pathname === '/' || location.pathname === '/login'
    });
  }

  render() {
    return (
      <div className={`navbar-container ${this.state.expanded && 'expanded'}`}>
        <div className="card">
          <img
            className="logo"
            src="https://iecsemanipal.com/images/logos/iecse-logo-white.png"
          />
          <div className={`nav ${this.state.open && 'open'}`}>
            <div className={`navbar`}>
              <button
                className={this.state.active === '/' ? 'active' : ''}
                onClick={() => {
                  this.props.history.push('/');
                  this.setState({ active: '/', expanded: true, open: false });
                }}
              >
                Home
              </button>
              <button
                className={this.state.active === '/events' ? 'active' : ''}
                onClick={() => {
                  this.props.history.push('/events');
                  this.setState({
                    active: '/events',
                    expanded: false,
                    open: false
                  });
                }}
              >
                Events
              </button>
              <button
                className={this.state.active === '/account' ? 'active' : ''}
                onClick={() => {
                  this.props.history.push('/account');
                  this.setState({
                    active: '/account',
                    expanded: false,
                    open: false
                  });
                }}
              >
                Account
              </button>
              {this.props.type > 1 && (
                <button
                  className={this.state.active === '/register' ? 'active' : ''}
                  onClick={() => {
                    this.props.history.push('/register');
                    this.setState({
                      active: '/register',
                      expanded: false,
                      open: false
                    });
                  }}
                >
                  Register
                </button>
              )}
              <button onClick={this.props.logout}>Log Out</button>
            </div>
          </div>
          <div
            onClick={() => this.setState({ open: !this.state.open })}
            className={`hamburger-icon ${this.state.open && 'open'}`}
          >
            <div />
            <div />
            <div />
          </div>
          {this.state.expanded && (
            <div>
              <div className="greeting">
                Hello {this.props.userDetails.name.split(' ')[0]}.
              </div>
              <div className="greeting-sub">
                Welcome to IECSE member portal.
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
