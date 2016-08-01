import React from 'react';

/*Router Components*/
import {
   Router, Route, IndexRoute, hashHistory
} from 'react-router';

/*Custom Components*/
import Layout from '../Layout';
import ChatContainer from '../ChatContainer.js';

const routes = (
   <Router history={hashHistory}>
      <Route path="/" component={Layout}>
         <IndexRoute component={ChatContainer}></IndexRoute>
      </Route>
   </Router>
);

export default routes;