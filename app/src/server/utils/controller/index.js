module.exports = function(wagner){
   wagner.factory('is_authenticated_controller', function(){
     var { is_authenticated_controller } = require('./isAuthenticated.js');
     return is_authenticated_controller;
   });
};