import React from 'react';
import PropTypes from 'prop-types';
import QrReader from 'react-qr-reader';

const QrScanner = props => (
  <QrReader
    delay={300}
    onError={err => console.log(err)}
    onScan={data => data && props.onScan(data)}
    style={{ width: '100%', height: '100%' }}
  />
);

QrScanner.propTypes = {
  onScan: PropTypes.func.isRequired
};

export default QrScanner;
