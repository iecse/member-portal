import { connect } from 'react-redux';
import { pick } from 'ramda';
import NewUser from './NewUser';
import action from 'Src/utils/action';

const mapDispatchToProps = dispatch => ({
  getRegistrationDetails: payload =>
    dispatch(action('FETCH_REGISTRATION_DETAILS_BEGIN', payload)),
  setPassword: payload => dispatch(action('FETCH_SET_PASSWORD_BEGIN', payload)),
  setSnackbar: payload => dispatch(action('SET_SNACKBAR', payload)),
  clearSnackbar: () => dispatch(action('CLEAR_SNACKBAR'))
});

const mapStateToProps = state => ({
  ...pick(['memId', 'name', 'email'], state.newUser)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewUser);
