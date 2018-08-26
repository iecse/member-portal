import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'Src/modules/Chart';
import './home.scss';
import Card from 'Src/modules/Card';

class Home extends Component {
  static propTypes = {
    getUserDetails: PropTypes.func.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        heading: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
        bottomInfo: PropTypes.string.isRequired
      })
    ).isRequired
  };

  componentDidMount() {
    this.props.getUserDetails();
  }

  render() {
    return (
      <div id="home-page">
        <div className="grid-container">
          {this.props.content.map((template, i) => (
            <div
              key={i}
              style={{ width: template.type === 'attendance' ? '50%' : '100%' }}
              className="card-container"
            >
              {template.type === 'attendance' ? (
                <Card
                  heading={template.heading}
                  bottomInfo={template.bottomInfo}
                >
                  <Chart width={template.width} route={template.route} />
                </Card>
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
