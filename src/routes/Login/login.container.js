import { connect } from 'react-redux';
import Login from './Login';
import action from '../../utils/action';

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(action('FETCH_LOGIN_BEGIN', payload))
});

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
