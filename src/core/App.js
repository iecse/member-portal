import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from '../routes';
import store from '../store';
import './app.scss';

const App = () => (
  <Provider store={store}>
    <div>
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
    </div>
  </Provider>
);

export default App;
