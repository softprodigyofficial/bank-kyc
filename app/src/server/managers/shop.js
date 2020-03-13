const Promise   = require('bluebird');
const config    = require('config');
const _         = require('underscore');

Shop = (function() {

  var global_wagner;

  function Shop(wagner){
    global_wagner = wagner;
  }

  Shop.prototype["index"] = function(req) {
    return new Promise( function(resolve, reject) {

      var shop = global_wagner.get('shop');
      resolve([]);

    });
  };

  return Shop;

})();

module.exports = Shop;
