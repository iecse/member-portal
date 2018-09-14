import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from 'Src/routes';
import './app.scss';
import Navbar from 'Src/modules/Navbar';
import Snackbar from 'Src/modules/Snackbar';
import Loader from 'Src/modules/Loader';

const App = props => (
  <Router>
    <div className="app-container">
      {props.loading && <Loader />}
      {props.loggedIn && <Navbar />}
      <Switch>
        {routes.map(route => (
          <Route
            exact
            key={route.pathname}
            path={route.pathname}
            component={route.component}
          />
        ))}
      </Switch>
      <Snackbar />
    </div>
  </Router>
);

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired
};

export default App;
