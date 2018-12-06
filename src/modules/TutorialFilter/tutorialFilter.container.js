import { connect } from 'react-redux';
import { pick } from 'ramda';
import TutorialFilter from './TutorialFilter';
import { action } from 'Src/utils';

const mapDispatchToProps = dispatch => ({
  addFilter: data => dispatch(action('ADD_TUTORIAL_FILTER', data)),
  removeFilter: data => dispatch(action('REMOVE_TUTORIAL_FILTER', data)),
  clearFilters: () => dispatch(action('CLEAR_TUTORIAL_FILTERS'))
});

const mapStateToProps = state => ({
  ...pick(['activeFilters'], state.tutorialFilter),
  ...pick(['tutorials'], state.tutorials)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorialFilter);
