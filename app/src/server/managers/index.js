module.exports = function(wagner) {

  wagner.factory('Users', function(){
    var Users = require('./users');
    return new Users(wagner);
  });

  wagner.factory('Banks', function(){
    var Banks = require('./banks');
    return new Banks(wagner);
  });

  wagner.factory('Customers', function(){
    var Customers = require('./customers');
    return new Customers(wagner);
  });

};
