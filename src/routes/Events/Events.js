import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Events extends Component {
  static propTypes = {
    fetchUpcomingEvents: PropTypes.func.isRequired,
    upcoming: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchUpcomingEvents();
  }

  render() {
    return (
      <div>
        Events
        <div>
          {this.props.upcoming.map((event, i) => (
            <div key={i}>{event.name}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Events;
