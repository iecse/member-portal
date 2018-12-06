import React from 'react';
import PropTypes from 'prop-types';
import './tutorialFilter.scss';

const TutorialFilter = props => (
  <div className="tutorial-filter">
    <div className="header">
      <div className="title">Filter</div>
      <div className="clear" onClick={() => props.clearFilters()}>
        CLEAR
      </div>
    </div>
    <div className="filters">
      {props.tutorials
        .reduce(
          (acc, tutorial) =>
            tutorial.domain && !acc.includes(tutorial.domain)
              ? [...acc, tutorial.domain]
              : acc,
          []
        )
        .map((domain, i) => (
          <div
            style={{
              background: props.activeFilters.includes(domain)
                ? '#369B4B'
                : '#999999'
            }}
            className="filter"
            key={`domain-${i}`}
            onClick={
              props.activeFilters.includes(domain)
                ? () => props.removeFilter(domain)
                : () => props.addFilter(domain)
            }
          >
            {domain}
          </div>
        ))}
    </div>
  </div>
);

TutorialFilter.propTypes = {
  activeFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  tutorials: PropTypes.arrayOf(
    PropTypes.shape({
      tutorialId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      domain: PropTypes.string,
      author: PropTypes.string
    })
  ).isRequired,
  removeFilter: PropTypes.func.isRequired,
  addFilter: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired
};

export default TutorialFilter;
