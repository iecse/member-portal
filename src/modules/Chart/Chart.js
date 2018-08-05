import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { request } from 'Src/utils';
import { charts } from 'Config/endpoints';
import './chart.scss';

class Chart extends Component {
  static propTypes = {
    route: PropTypes.string.isRequired
  };

  state = {
    id: null
  };

  async componentDidMount() {
    const data = await request(this.props.route);
    if (data.success) this.setState({ id: data.data.id });
  }

  render() {
    return (
      <div className="chart-container">
        {this.state.id ? (
          <iframe scrolling="no" src={charts + '/r/' + this.state.id} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default Chart;
