import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewUser extends Component {
  state = {
    password: '',
    rePassword: ''
  };

  static propTypes = {
    getRegistrationDetails: PropTypes.func.isRequired,
    memId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
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
      <div>
        <div>{this.props.memId}</div>
        <div>{this.props.name}</div>
        <div>{this.props.email}</div>
        <form onSubmit={this.newUser}>
          <div>
            <input
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
            />
          </div>
          <div>
            <input
              onChange={e => this.setState({ rePassword: e.target.value })}
              type="password"
            />
          </div>
          <button onClick={this.newUser}>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewUser;
