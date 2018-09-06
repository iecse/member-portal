import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './newUser.scss';

class NewUser extends Component {
  state = {
    password: '',
    rePassword: ''
  };

  static propTypes = {
    getRegistrationDetails: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
    setPassword: PropTypes.func.isRequired,
    clearSnackbar: PropTypes.func.isRequired,
    setSnackbar: PropTypes.func.isRequired
  };

  componentDidMount() {
    const token = new URL(window.location.href).searchParams.get('token');
    if (token)
      this.props.getRegistrationDetails({
        token,
        push: this.props.history.push
      });
    else this.props.history.push('/login');
  }

  newUser = e => {
    e.preventDefault();
    const token = new URL(window.location.href).searchParams.get('token');
    if (this.state.password !== this.state.rePassword) {
      this.props.setSnackbar({
        message: "Passwords don't match",
        type: 'danger'
      });
      setTimeout(() => {
        this.props.clearSnackbar();
      }, 3000);
    } else if (
      this.state.password.length < 8 ||
      this.state.password.length > 30
    ) {
      this.props.setSnackbar({
        message: 'Passwords must be 8 - 30 characters long',
        type: 'danger'
      });
      setTimeout(() => {
        this.props.clearSnackbar();
      }, 3000);
    } else {
      this.props.clearSnackbar();
      this.props.setPassword({
        password: this.state.password,
        push: this.props.history.push,
        token
      });
    }
  };

  render() {
    return (
      <div className="new-user">
        <div className="card">
          <div className="greeting">Hi, {this.props.name}</div>
          <div className="details">Set your member portal password.</div>
          <div className="email">Email: {this.props.email}</div>
          <form onSubmit={this.newUser}>
            <div>
              <input
                onChange={e => this.setState({ password: e.target.value })}
                type="password"
                placeholder="PASSWORD"
              />
            </div>
            <div>
              <input
                onChange={e => this.setState({ rePassword: e.target.value })}
                type="password"
                placeholder="RETYPE PASSWORD"
              />
            </div>
            <div className="submit-container">
              <button onClick={this.newUser}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewUser;
