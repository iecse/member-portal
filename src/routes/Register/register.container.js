import { connect } from 'react-redux';
import { pick } from 'ramda';
import Register from './Register';
import action from '../../utils/action';

const mapDispatchToProps = dispatch => ({
  getRegistrationDetails: payload =>
    dispatch(action('FETCH_REGISTRATION_DETAILS_BEGIN', payload)),
  setPassword: payload => dispatch(action('FETCH_SET_PASSWORD_BEGIN', payload)),
  setSnackbar: payload => dispatch(action('SET_SNACKBAR', payload)),
  clearSnackbar: () => dispatch(action('CLEAR_SNACKBAR'))
});

const mapStateToProps = state => ({
  ...pick(['memId', 'name', 'email'], state.register)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
