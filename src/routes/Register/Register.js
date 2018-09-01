import React from 'react';
import PropTypes from 'prop-types';
import QrScanner from 'Src/modules/QrScanner';
import { pick } from 'ramda';
import './register.scss';
import Card from 'Src/modules/Card';

const Register = props => (
  <div className="register-page">
    <div className="qr-container">
      <QrScanner
        onScan={data =>
          props.isScanningId
            ? props.memIdQrScanned(getMemId(data))
            : props.registrationQrScanned(getRegistrationDetails(data))
        }
      />
    </div>
    <div className="details">
      <Card>
        <div>
          <br />
          memId: {props.memId}
          <br />
          isScanningId: {props.isScanningId.toString()}
          <br />
          name: {props.name}
          <br />
          regNo: {props.regNo}
          <br />
          email: {props.email}
          <br />
          mobile: {props.mobile}
          <br />
          scanned: {props.scanned}
          <br />
          <button
            onClick={() =>
              props.registerUser(
                pick(['memId', 'name', 'email', 'regNo', 'mobile'], props)
              )
            }
          >
            Register
          </button>
        </div>
      </Card>
    </div>
  </div>
);

Register.propTypes = {
  memId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  regNo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  scanned: PropTypes.string.isRequired,
  isScanningId: PropTypes.bool.isRequired,
  registrationQrScanned: PropTypes.func.isRequired,
  memIdQrScanned: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired
};

function getMemId(data) {
  if (
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
      data
    )
  )
    return { memId: data, isScanningId: false };
  else return { isScanningId: true };
}

function getRegistrationDetails(data) {
  let parsedData;
  try {
    parsedData = JSON.parse(data);
    if (
      !['name', 'regNo', 'email', 'mobile'].every(key =>
        Object.keys(parsedData).includes(key)
      )
    )
      parsedData = { isScanningId: false };
    else parsedData.isScanningId = true;
  } catch (err) {
    parsedData = { isScanningId: false };
  }
  return {
    ...parsedData,
    scanned: data
  };
}

export default Register;
