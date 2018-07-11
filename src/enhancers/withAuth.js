import React from 'react';
import PropTypes from 'prop-types';

const Loading = () => <div>Loading</div>;
export default (Component, authRequired = true) =>
  class withAuthHOC extends React.Component {
    state = {
      start: false
    };

    static propTypes = {
      loggedIn: PropTypes.bool,
      history: PropTypes.object
    };

    componentDidMount() {
      if (!this.props.loggedIn && authRequired)
        this.props.history.push('/login');
      else if (this.props.loggedIn && !authRequired)
        this.props.history.push('/');
      else this.setState({ start: true });
    }

    render = () => (this.state.start ? <Component /> : <Loading />);
  };
