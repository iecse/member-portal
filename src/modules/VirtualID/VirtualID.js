import React from 'react';
import PropTypes from 'prop-types';
import qrcode from 'qrcode-js';
import './virtualID.scss';

const VirtualID = props => (
  <div className="virtual-id">
    <div className="qrcode-container">
      {props.memId && (
        <img className="qrcode" src={qrcode.toDataURL(props.memId, 6)} />
      )}
    </div>
    <div className="details">
      <div className="name">{props.name}</div>
      <div>{props.email}</div>
    </div>
  </div>
);

VirtualID.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  memId: PropTypes.string.isRequired
};

export default VirtualID;
