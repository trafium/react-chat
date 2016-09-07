import React from 'react';

/*Router Components*/
import {
   Router, Route, IndexRoute, hashHistory
} from 'react-router';

/*Custom Components*/
import Layout from '../Layout';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
    </Route>
  </Router>
);

export default routes;