import { connect } from 'react-redux';
import { pick } from 'ramda';
import Register from './Register';
import action from 'Src/utils/action';

const mapDispatchToProps = dispatch => ({
  memIdQrScanned: data => dispatch(action('MEM_ID_QR_SCANNED', data)),
  registrationQrScanned: data =>
    dispatch(action('REGISTRATION_QR_SCANNED', data)),
  registerUser: data => dispatch(action('FETCH_REGISTER_USER_BEGIN', data))
});

const mapStateToProps = state => ({
  ...pick(
    ['name', 'regNo', 'memId', 'email', 'mobile', 'scanned', 'isScanningId'],
    state.register
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
