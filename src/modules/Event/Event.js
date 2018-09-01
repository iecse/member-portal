import React from 'react';
import PropTypes from 'prop-types';
import { datetime } from 'Src/utils';

const Event = props => (
  <div>
    <div>{props.details}</div>
    <div>{props.description}</div>
    <div>{datetime(props.eventStart)}</div>
    <div>{datetime(props.eventEnd)}</div>
    <div>{props.audience}</div>
    <br />
  </div>
);

Event.propTypes = {
  details: PropTypes.string,
  description: PropTypes.string,
  eventStart: PropTypes.string,
  eventEnd: PropTypes.string,
  audience: PropTypes.string
};

export default Event;
