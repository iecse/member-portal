import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pick, compose } from 'ramda';

const mapDispatchToProps = () => ({});

const mapStateToProps = state => ({
  ...pick(['loggedIn'], state.common),
  ...pick(['type'], state.common.userDetails)
});

const connector = Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);

const withAuth = (Component, authRequired = true, type = 1) =>
  class withAuthHOC extends React.Component {
    state = {
      start: false
    };

    static propTypes = {
      loggedIn: PropTypes.bool.isRequired,
      history: PropTypes.object.isRequired,
      type: PropTypes.number.isRequired
    };

    static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.loggedIn === prevState.start) return null;
      if (!nextProps.loggedIn && authRequired) nextProps.history.push('/login');
      else if (nextProps.loggedIn && !authRequired) nextProps.history.push('/');
      else if (nextProps.type < type) nextProps.history.push('/');
      return { start: true };
    }

    componentDidMount() {
      if (!this.props.loggedIn && authRequired)
        this.props.history.push('/login');
      else if (this.props.loggedIn && !authRequired)
        this.props.history.push('/');
      else if (this.props.type < type) this.props.history.push('/');
      else this.setState({ start: true });
    }

    render = () => (this.state.start ? <Component {...this.props} /> : null);
  };

export default compose(
  connector,
  withAuth
);
