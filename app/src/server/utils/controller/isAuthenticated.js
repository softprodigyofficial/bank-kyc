const config = require('config');

is_authenticated_controller = {
  'isAuthenticated': function(req, res, next){
  	if(req.session.user){ 
  	  return next();	
  	} else {
  	  res.redirect('/');
  	}
  }
};

module.exports = { is_authenticated_controller }
