import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <div>
        Login
        <form onSubmit={this.login}>
          <input
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Email"
          />
          <br />
          <input
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Password"
          />
          <br />
          <button onClick={this.login}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
