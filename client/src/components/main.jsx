import React from 'react';
import ReactRouter from 'react-router'; 
import { DefaultRoute, Link, Navigation, TransitionTo, Route, Router, RouteHandler } from 'react-router';
import Routes from '../routes.jsx';
import AuthStore from '../stores/test.jsx';

export default React.createClass({
  mixins: [Navigation],
  
  componentWillMount: function() {
    console.log("intercepting transition path");
    console.log('isLogedIn', AuthStore.isLoggedIn());
    if(!AuthStore.isLoggedIn()){
      this.transitionTo('/login');
    }
  },
  render: function(){
    return <div>
      Home Page
    </div>
  }
});