import React from 'react';
import PropTypes from 'prop-types';
import qrcode from 'qrcode-js';

const VirtualID = props => (
  <div>
    {props.memId && <img src={qrcode.toDataURL(props.memId, 4)} />}
    <br />
    {props.name}
    <br />
    {props.email}
  </div>
);

VirtualID.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  memId: PropTypes.string.isRequired
};

export default VirtualID;
