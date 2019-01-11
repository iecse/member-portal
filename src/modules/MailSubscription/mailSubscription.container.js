import MailSubscription from './MailSubscription';
import { connect } from 'react-redux';
import { pick } from 'ramda';
import { action } from 'Src/utils';

const mapDispatchToProps = dispatch => ({
  subscribeMail: () => dispatch(action('FETCH_SUBSCRIBE_MAIL_BEGIN')),
  unsubscribeMail: () => dispatch(action('FETCH_UNSUBSCRIBE_MAIL_BEGIN'))
});

const mapStateToProps = state => ({
  ...pick(['subscribed'], state.common.userDetails)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MailSubscription);
