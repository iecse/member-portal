import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './login.scss';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };

  login = e => {
    e.preventDefault();
    if (!!this.state.email && !!this.state.password)
      this.props.login({
        email: this.state.email,
        password: this.state.password,
        push: this.props.history.push
      });
  };

  render() {
    return (
      <div className="login-page full-page-centered">
        <div className="card">
          <div className="details">
            <img
              className="logo"
              src="https://iecsemanipal.com/images/logos/iecse-logo-white.png"
            />
          </div>
          <form className="form" onSubmit={this.login}>
            <div>
              <input
                spellCheck="false"
                onChange={e => this.setState({ email: e.target.value })}
                type="text"
                placeholder="EMAIL"
              />
              <br />
              <input
                onChange={e => this.setState({ password: e.target.value })}
                type="password"
                placeholder="PASSWORD"
              />
              <br />
              <button onClick={this.login}>LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
