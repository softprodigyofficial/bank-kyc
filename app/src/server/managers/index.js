module.exports = function(wagner) {

  wagner.factory('Users', function(){
    var Users = require('./users');
    return new Users(wagner);
  });

};
