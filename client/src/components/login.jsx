import React from 'react';
import Actions from '../actions.jsx';
import LoginStore from '../stores/test.jsx';
import Reflux from 'reflux';
import { DefaultRoute, Link, Route, Router, RouteHandler } from 'react-router';

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(LoginStore, 'onChange')
  ],
  getInitialState: function () {
    return {
        login: []
    };
  },
  componentWillMount: function() {
    // Actions.getLogin();
  },
  render: function() {
    return <div>
      Login Page
      {this.renderLogin()}
    </div>
  },
  renderLogin: function() {
    return <div>
      <a href="/auth/github">Login with Github</a>
    </div>
  },
  onChange: function(event, login) {
    this.setState({login: login})
  },
  getLoginInfo: function() {
    console.log("calling login info")
    Actions.getLogin();
  }
})
