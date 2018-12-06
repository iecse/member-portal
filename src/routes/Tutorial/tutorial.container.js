import { connect } from 'react-redux';
import { pick } from 'ramda';
import Tutorial from './Tutorial';
import action from 'Src/utils/action';

const mapDispatchToProps = dispatch => ({
  fetchTutorial: data => dispatch(action('FETCH_TUTORIAL_BEGIN', data))
});

const mapStateToProps = state => ({
  ...pick(
    ['tutorialId', 'name', 'content', 'author', 'description', 'domain'],
    state.tutorials
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tutorial);
