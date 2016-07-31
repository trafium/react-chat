require('!style!css!sass!./style.scss');

import ReactDOM from 'react-dom';
import React from 'react';
import routes from './components/config/routes.js';
import Layout from './components/Layout.js';

ReactDOM.render(
   routes,
   document.getElementById('app')
);