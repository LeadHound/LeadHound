import Reflux from 'reflux';
import Api from '../utils/api.jsx';
import Actions from '../actions.jsx';


module.exports = Reflux.createStore({
  listenables: [Actions], //if any actions get called and you have a method with the same call, call the method
  getLogin: function() {
    return Api.get('login')
      .then(function(json){
        this.login = json;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.login);
    //broadcasting to the entire app, event and info we want to share
  }
});