import React from 'react';
import ReactRouter from 'react-router';
import HashHistory from '../../node_modules/react-router/lib/hashhistory.js';
import Main from './components/main.jsx';
import Login from './components/login.jsx';
import { DefaultRoute, Link, Route, Router, RouteHandler } from 'react-router';

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main} />
    <Route path="login" component={Login} /> 
  </Router>
)
