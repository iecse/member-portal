import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { datetime } from 'Src/utils';
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
        className="events"
        style={{ maxHeight: this.props.height || 'auto' }}
      >
        {this.props.upcoming.map((event, i) => (
          <div className="event" key={i}>
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
