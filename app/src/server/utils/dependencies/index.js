module.exports = function(wagner) {
  wagner.factory('KYC', function(){
    var KYC = require('./kyc');
    return KYC;
  });
};
