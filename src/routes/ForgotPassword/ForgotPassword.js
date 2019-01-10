import React from 'react';
import { withRouter } from 'react-router';
import ForgotPasswordForm from 'Src/modules/ForgotPasswordForm';
import PropTypes from 'prop-types';
import './forgotPassword.scss';

const ForgotPassword = props => (
  <div className="forgot-password-page">
    <div className="login" onClick={() => props.history.push('/login')}>
      LOGIN
    </div>
    <div className="form-container">
      <ForgotPasswordForm />
    </div>
  </div>
);

ForgotPassword.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(ForgotPassword);
