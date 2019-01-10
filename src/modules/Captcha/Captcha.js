import React from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

const Captcha = props => (
  <div>
    <ReCAPTCHA
      sitekey={'6LfJLYgUAAAAAJkUPkyvjR5fFsjqldnKPT6707D1'}
      onChange={props.input.onChange}
    />
  </div>
);

Captcha.propTypes = {
  input: PropTypes.any.isRequired
};

export default Captcha;
