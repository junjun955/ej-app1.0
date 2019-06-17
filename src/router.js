import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ProductPage from './routes/ProductPage'
import App from './routes/App'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <App>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/product" exact component={ProductPage} />
        </Switch>
      </App>
    </Router>
  );
}

export default RouterConfig;