import { connect } from 'react-redux';
import { pick } from 'ramda';
import VirtualID from './VirtualID';

const mapDispatchToProps = () => ({});

const mapStateToProps = state => ({
  ...pick(['name', 'email', 'memId'], state.common.userDetails)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VirtualID);
