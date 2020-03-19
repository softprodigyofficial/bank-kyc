module.exports = function(wagner) {
  wagner.factory('passport', function(){
    var passport = require('./passport');
    return passport; 
  });
};
