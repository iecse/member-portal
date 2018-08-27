import React from 'react';
import PropTypes from 'prop-types';
import QrScanner from 'Src/modules/QrScanner';
import VirtualID from 'Src/modules/VirtualID';

const Register = props => (
  <div>
    <QrScanner
      onScan={data => props.registrationQrScanned(getRegistrationDetails(data))}
    />
    <br />
    {props.name}
    {props.regNo}
    {props.email}
    {props.mobile}
    {props.scanned}
    <br />
    <br />
    <br />
    <VirtualID />
  </div>
);

Register.propTypes = {
  name: PropTypes.string.isRequired,
  regNo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  scanned: PropTypes.string.isRequired,
  registrationQrScanned: PropTypes.func.isRequired
};

function getRegistrationDetails(data) {
  let parsedData;
  try {
    parsedData = JSON.parse(data);
  } catch (err) {
    parsedData = {};
  }
  return {
    name: '',
    regNo: '',
    email: '',
    mobile: '',
    ...parsedData,
    scanned: data
  };
}

export default Register;
