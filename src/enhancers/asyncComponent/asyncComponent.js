import React, { Component } from 'react';

const asyncComponent = importComponent =>
  class asyncComponentHOC extends Component {
    state = {
      component: null
    };

    async componentDidMount() {
      importComponent().then(cmp => {
        this.setState({ component: cmp.default });
      });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };

export default asyncComponent;
