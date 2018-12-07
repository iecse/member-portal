import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { datetime } from 'Src/utils';
import moment from 'moment';
import './upcoming.scss';

class Upcoming extends Component {
  static propTypes = {
    upcoming: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        eventStart: PropTypes.string,
        eventEnd: PropTypes.string,
        domain: PropTypes.string
      })
    ).isRequired,
    fetchUpcomingEvents: PropTypes.func.isRequired,
    height: PropTypes.number
  };

  componentDidMount() {
    this.props.fetchUpcomingEvents();
  }

  render() {
    return (
      <div
        className="upcoming-events"
        style={{ maxHeight: this.props.height || 'auto' }}
      >
        {this.props.upcoming
          .sort((e1, e2) => moment(e1.eventStart).isAfter(e2.eventStart))
          .map((event, i) => (
            <div className="upcoming-event" key={`upcoming-event-${i}`}>
              <div className="title">{event.name}</div>
              <div className="start">{datetime(event.eventStart)}</div>
            </div>
          ))}
        {this.props.upcoming.length === 0 && (
          <div className="no-events">No upcoming events</div>
        )}
      </div>
    );
  }
}

export default Upcoming;
