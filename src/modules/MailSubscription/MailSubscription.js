import React from 'react';
import PropTypes from 'prop-types';
import './mailSubscription.scss';

const MailSubscription = props => (
  <div className="mail-subscription">
    <span className="message">
      {props.subscribed
        ? 'You are subscribed to our mailing list'
        : 'You are not subscribed to our mailing list'}
    </span>
    <br />
    <button
      className="sub-button"
      onClick={() =>
        props.subscribed ? props.unsubscribeMail() : props.subscribeMail()
      }
    >
      {props.subscribed ? 'Unsubscribe' : 'Subscribe'}
    </button>
  </div>
);

MailSubscription.propTypes = {
  subscribed: PropTypes.bool.isRequired,
  subscribeMail: PropTypes.func.isRequired,
  unsubscribeMail: PropTypes.func.isRequired
};

export default MailSubscription;
