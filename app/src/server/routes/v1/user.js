const fs = require('fs');
const path = require('path');
const async = require('async');
const bcrypt = require("bcryptjs");
const HTTPStatus = require('http-status');

module.exports = function(app, wagner, passport) {

  function isAuthenticated(req, res, next) {
    if (req.session.user){ return next(); }
    else { res.status(403).json({ success: '0', message: "failure", data: "Not Authorized!" }); }
  };
  
  app.post('/v1/admin/login', async (req, res) => {
   passport.authenticate('local', (err, user, info) => {
     if (user) { 
      req.session.user = info.user;
      req.session.save();
      res.status(HTTPStatus.OK).json({ success: '1', message: "success", data: info }); 
     }
     else { console.log(info); res.status(HTTPStatus.NOT_FOUND).json({ success: '0', message: "failure", data: {} });  }
   })(req, res);
  });

  app.get('/v1/users', function(req, res){
    wagner.get('Users')['list'](req).then(function(result) {
      res.status(HTTPStatus.OK).json({ success: '1', message: "success", data: result });
    }).catch(function(error){
      console.log(error);
      res.status(HTTPStatus.NOT_FOUND).json({ success: '0', message: "failure", data: error });
    });
   
  }); 

  app.get('/v1/user/:id', function(req, res){
    wagner.get('Users')['user'](req.params).then(function(result){
      res.status(HTTPStatus.OK).json({ success: '1', message: "success", data: result }); 
    }).catch(function(error){
      console.log(error);
      res.status(HTTPStatus.NOT_FOUND).json({ success: '0', message: "failure", data: error });
    });
  });

  app.put('/v1/user/wallet-address', function(req, res){
    wagner.get('Users')['wallet-address'](req).then(function(result){
      res.status(HTTPStatus.OK).json({ success: '1', message: "success", data: result }); 
    }).catch(function(error){
      console.log(error);
      res.status(HTTPStatus.NOT_FOUND).json({ success: '0', message: "failure", data: error });
    });
  });

};
