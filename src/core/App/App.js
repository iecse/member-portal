import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from 'Src/routes';
import store from 'Src/store';
import './app.scss';
import Navbar from 'Src/modules/Navbar';
import Snackbar from 'Src/modules/Snackbar';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="app-container">
        <Navbar />
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
  </Provider>
);

export default App;
