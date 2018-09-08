import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Event from 'Src/modules/Event';
import Card from 'Src/modules/Card';
import moment from 'moment';
import './events.scss';

class Events extends Component {
  static propTypes = {
    fetchUpcomingEvents: PropTypes.func.isRequired,
    upcoming: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        domain: PropTypes.string,
        details: PropTypes.string,
        description: PropTypes.string,
        eventStart: PropTypes.string,
        eventEnd: PropTypes.string,
        audience: PropTypes.string
      })
    ).isRequired
  };

  componentDidMount() {
    this.props.fetchUpcomingEvents();
  }

  render() {
    return (
      <div
        className={`events-page ${this.props.upcoming.length === 0 && 'empty'}`}
      >
        {this.props.upcoming.length === 0 && (
          <div className="no-events">No upcoming events</div>
        )}
        {this.props.upcoming
          .sort((e1, e2) => moment(e1.eventStart).isAfter(e2.eventStart))
          .map((event, i) => (
            <div key={i} className="card-container">
              <Card heading={event.name} bottomInfo={event.domain}>
                <Event {...event} />
              </Card>
            </div>
          ))}
      </div>
    );
  }
}

export default Events;
