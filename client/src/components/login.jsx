import React from 'react';
import Actions from '../actions.jsx';
import LoginStore from '../stores/test.jsx';
import Reflux from 'reflux';

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
    Actions.getLogin();
  },
  render: function() {
    return <div>
      Login Page
      {this.renderLogin()}
    </div>
  },
  renderLogin: function() {
    return <div>
      {this.state.login}
    </div> //passing image to this.props
  },
  onChange: function(event, login) {
    this.setState({login: login})
  }
})