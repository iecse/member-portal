import { connect } from 'react-redux';
import { pick } from 'ramda';
import Register from './Register';
import action from 'Src/utils/action';

const mapDispatchToProps = dispatch => ({
  registrationQrScanned: data =>
    dispatch(action('REGISTRATION_QR_SCANNED', data))
});

const mapStateToProps = state => ({
  ...pick(['name', 'regNo', 'email', 'mobile', 'scanned'], state.register)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
