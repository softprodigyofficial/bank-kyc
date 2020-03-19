module.exports = function(wagner) {

  wagner.factory('User', function(){
    var User = require('./users');
    return new User(wagner);
  });

};
