import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from '../routes';
import store from '../store';
import './app.scss';
import Navbar from '../modules/Navbar';
import Snackbar from '../modules/Snackbar';

const App = () => (
  <Provider store={store}>
    <div>
      <Navbar />
      <Router>
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
      </Router>
      <Snackbar />
    </div>
  </Provider>
);

export default App;
