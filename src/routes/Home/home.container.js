import { connect } from 'react-redux';
import { pick } from 'ramda';
import Home from './Home';
import action from 'Src/utils/action';

const mapDispatchToProps = dispatch => ({
  getUserDetails: () => dispatch(action('FETCH_HOME_DATA_BEGIN'))
});

const mapStateToProps = state => ({
  ...pick(['grid', 'content'], state.home),
  ...pick(['userDetails'], state.common)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
