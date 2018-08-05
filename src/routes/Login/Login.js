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
      <div id="login-page" className="full-page-centered">
        <div className="login-container">
          <div className="login-details">
            Lorem ipsum dolor sit amet, massa at, feugiat congue diam, donec at
            semper curabitur culpa turpis proin, adipiscing curabitur aliquam
            quis, ut rutrum. Eget vel quam ipsum consequat, pellentesque sapien
            praesent sed magna eu, dis aliquam magna at. Vitae sed ac
            pellentesque curabitur, leo at pharetra lorem donec aliquam quam.
            Aliquet nullam mattis id mi, amet lobortis a lacus sollicitudin
            rutrum vivamus, sit amet. Donec venenatis nec feugiat habitasse wisi
            vestibulum, a risus lobortis ipsum ante, ultrices vulputate risus
            felis risus. Justo ipsum curabitur, litora mauris sed. Quis at ac
            ultrices suspendisse amet, a mi nostra, venenatis diam. Suscipit
            tincidunt bibendum ut, ipsum aenean turpis ipsum, volutpat pulvinar,
            ac nulla tenetur mauris. Deserunt repellendus ultrices nullam
            elementum, enim ut massa, aenean nonummy.
          </div>
          <form className="login-form" onSubmit={this.login}>
            <div>
              <input
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
