import { connect } from 'react-redux';
import Tutorials from './Tutorials';
import action from 'Src/utils/action';

const mapDispatchToProps = dispatch => ({
  fetchTutorials: data => dispatch(action('FETCH_TUTORIALS_BEGIN', data))
});

const mapStateToProps = state => ({
  tutorials: state.tutorials.tutorials
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tutorials);
