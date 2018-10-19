import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import LoginPage from './routes/LoginPage';
import A from './routes/A';
import B from './routes/B';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <IndexPage>
          <Switch>
            <Route path="/a" exact component={A} />
            <Route path="/b" exact component={B} />
          </Switch>
        </IndexPage>
      </Switch>
      
      
    </Router>
  );
}

export default RouterConfig;
