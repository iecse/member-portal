import { connect } from 'react-redux';
import { pick } from 'ramda';
import { action } from '../../utils';
import Navbar from './Navbar';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(action('FETCH_LOGOUT_BEGIN'))
});

const mapStateToProps = state => ({
  ...pick(['loggedIn'], state.login)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
