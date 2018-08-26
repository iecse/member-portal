import React from 'react';
import PropTypes from 'prop-types';
import { datetime } from 'Src/utils';

const Event = props => (
  <div>
    <div>{props.name}</div>
    <div>{props.desc}</div>
    <div>{datetime(props.start)}</div>
    <div>{datetime(props.end)}</div>
    <div>{props.audience}</div>
    <div>{props.domain}</div>
  </div>
);

Event.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  audience: PropTypes.string,
  domain: PropTypes.string
};

export default Event;
