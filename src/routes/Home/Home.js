import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VirtualID from 'Src/components/VirtualID';
import Chart from 'Src/modules/Chart';

import './home.scss';

class Home extends Component {
  static propTypes = {
    getUserDetails: PropTypes.func.isRequired,
    userDetails: PropTypes.shape({
      memId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    }).isRequired,
    grid: PropTypes.shape({
      areas: PropTypes.string.isRequired,
      rows: PropTypes.string.isRequired,
      columns: PropTypes.string.isRequired,
      height: PropTypes.string
    }),
    content: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getUserDetails();
  }

  render() {
    return (
      <div>
        <VirtualID {...this.props.userDetails} />
        <div
          style={{
            gridTemplateAreas: this.props.grid.areas,
            gridTemplateRows: this.props.grid.rows,
            gridTemplateColumns: this.props.grid.columns,
            height:
              this.props.grid.height ||
              this.props.grid.rows.split(' ').length * 330
          }}
          className="home-grid"
        >
          {this.props.content.map((template, i) => (
            <div
              key={i}
              style={{ gridArea: template.area, background: template.color }}
            >
              {template.type === 'chart' ? (
                <Chart route={template.route} />
              ) : (
                <div />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
