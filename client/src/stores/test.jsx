import Reflux from 'reflux';
import Api from '../utils/api.jsx';
import Actions from '../actions.jsx';


module.exports = Reflux.createStore({
  listenables: [Actions], //if any actions get called and you have a method with the same call, call the method
  isLoggedIn: function() {
    var cookie = document.cookie.slice(0,4) || "";
    return cookie === 'user';
  }
});
