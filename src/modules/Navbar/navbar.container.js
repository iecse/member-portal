import { connect } from 'react-redux';
import { pick } from 'ramda';
import { action } from 'Src/utils';
import Navbar from './Navbar';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(action('FETCH_LOGOUT_BEGIN'))
});

const mapStateToProps = state => ({
  ...pick(['userDetails'], state.common),
  ...pick(['type'], state.common.userDetails)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
