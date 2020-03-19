module.exports = function(wagner){
   wagner.factory('isAuthenticated', function(){
     var { is_authenticated_controller } = require('./isAuthenticated.js');
     return is_authenticated_controller;
   });
};