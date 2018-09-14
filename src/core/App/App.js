import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from 'Src/routes';
import './app.scss';
import Navbar from 'Src/modules/Navbar';
import Snackbar from 'Src/modules/Snackbar';
import Loader from 'Src/modules/Loader';
import Favicon from 'react-favicon';

const App = props => (
  <div>
    {props.loading && <Loader />}
    <Favicon url="https://iecsemanipal.com/images/logos/logo-white.png" />
    <Router>
      <div className={`app-container ${props.loggedIn && 'background'}`}>
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
  </div>
);

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired
};

export default App;
