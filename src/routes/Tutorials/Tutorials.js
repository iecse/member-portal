import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from 'Src/modules/ListItem';
import './tutorials.scss';

class Tutorials extends Component {
  componentDidMount() {
    this.props.fetchTutorials();
  }

  render() {
    return (
      <div className="tutorials-page">
        {this.props.tutorials.map((tutorial, i) => (
          <ListItem
            key={`tutorial-${i}`}
            title={tutorial.name}
            description={tutorial.description}
            domain={tutorial.domain}
            subtext={`Written by ${tutorial.author}`}
            click={() =>
              this.props.history.push(`/tutorial?id=${tutorial.tutorialId}`)
            }
          />
        ))}
      </div>
    );
  }
}

Tutorials.propTypes = {
  tutorials: PropTypes.arrayOf(
    PropTypes.shape({
      tutorialId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      domain: PropTypes.string,
      author: PropTypes.string
    })
  ).isRequired,
  fetchTutorials: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default Tutorials;
