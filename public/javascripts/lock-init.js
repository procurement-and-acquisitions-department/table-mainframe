(function(window){

  var lock = new Auth0Lock('FIluNL0AWyBE3hYs3exbawhJD9rZNdh3', 'kperch.auth0.com');
  
  
  window.signin = function() {
    lock.show({
        callbackURL: 'http://localhost:3000/users/authenticate'
      , responseType: 'code'
      , authParams: {
        scope: 'openid profile'
      }
    });
  }
})(window)