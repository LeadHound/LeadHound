import Fetch from 'whatwg-fetch';
var rootUrl = 'http://localhost:3000/';

module.exports = window.api = {
  get: function(url) {
    return fetch(rootUrl + url, {
    })
    .then(function(response){
      console.log("Api.get called succesfully");
      return response.json();
    });
  }
};

//Intended use is to allow any part of our application to be able to call 
//the api like Api.get('images')

