import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from 'Src/modules/ListItem';
import TutorialFilter from 'Src/modules/TutorialFilter';
import './tutorials.scss';

class Tutorials extends Component {
  static propTypes = {
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
    history: PropTypes.object.isRequired,
    activeFilters: PropTypes.arrayOf(PropTypes.string).isRequired
  };
  componentDidMount() {
    this.props.fetchTutorials();
  }

  render() {
    return (
      <div className="tutorials-page">
        <div className="filter-container">
          <TutorialFilter />
        </div>
        <div className="tutorials-container">
          {this.props.tutorials
            .filter(
              tutorial =>
                this.props.activeFilters.includes(tutorial.domain) ||
                this.props.activeFilters.length === 0
            )
            .map((tutorial, i) => (
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
          <div style={{ height: 15 }} />
        </div>
      </div>
    );
  }
}

export default Tutorials;
