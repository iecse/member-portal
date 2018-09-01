import React from 'react';
import VirtualID from 'Src/modules/VirtualID';
import './account.scss';
import Card from 'Src/modules/Card';

const Account = () => (
  <div className="account-page">
    <Card>
      <VirtualID />
    </Card>
  </div>
);

export default Account;
