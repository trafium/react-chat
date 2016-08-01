require('!style!css!sass!./style.scss');

import ReactDOM from 'react-dom';
import React from 'react';
import routes from './js/components/config/routes.js';
import { Provider } from 'react-redux';
import store from './js/store.js';
import Layout from './js/components/Layout.js';

ReactDOM.render(
   <Provider store={store}>
      {routes}
   </Provider>,
   document.getElementById('app')
);