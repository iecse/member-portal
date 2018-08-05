import { connect } from 'react-redux';
import { pick } from 'ramda';
import Events from './Events';
import action from 'Src/utils/action';

const mapDispatchToProps = dispatch => ({
  fetchUpcomingEvents: () => dispatch(action('FETCH_UPCOMING_EVENTS_BEGIN'))
});

const mapStateToProps = state => ({
  ...pick(['upcoming'], state.events)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
