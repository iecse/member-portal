import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';

const VirtualID = props => (
  <div>
    {props.memId && <QRCode value={props.memId} />}
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
