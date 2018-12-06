import React from 'react';
import PropTypes from 'prop-types';
import { datetime } from 'Src/utils';

import './event.scss';

const Event = props => (
  <div className="event">
    <div className="details">{props.details}</div>
    <div className="description">{props.description}</div>
    <div className="timings">
      {props.eventStart && <span>Start: {datetime(props.eventStart)}</span>}
      <br />
      {props.eventEnd && <span>End: {datetime(props.eventEnd)}</span>}
    </div>
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
