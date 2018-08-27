import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'Src/modules/Chart';
import './home.scss';
import Card from 'Src/modules/Card';
import Upcoming from 'Src/modules/Upcoming';

class Home extends Component {
  static propTypes = {
    getUserDetails: PropTypes.func.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        heading: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        route: PropTypes.string,
        bottomInfo: PropTypes.string,
        height: PropTypes.number
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
                  <Chart
                    width={template.width}
                    height={template.height || 140}
                    route={template.route}
                  />
                </Card>
              ) : template.type === 'upcoming' ? (
                <Card
                  heading={template.heading}
                  bottomInfo={template.bottomInfo}
                >
                  <Upcoming height={template.height} />
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
