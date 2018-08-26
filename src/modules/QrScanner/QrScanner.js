import React from 'react';
import QrReader from 'react-qr-reader';

const QrScanner = () => (
  <div>
    <QrReader
      delay={300}
      onError={err => console.log(err)}
      onScan={data => (data ? console.log(data) : console.log('asd', data))}
      style={{ width: '400px', height: '400px' }}
    />
  </div>
);

export default QrScanner;
