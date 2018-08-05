import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Event from 'Src/components/Event';

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
          {this.props.upcoming.map((event, i) => <Event {...event} key={i} />)}
        </div>
      </div>
    );
  }
}

export default Events;
