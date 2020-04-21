'use strict';
const fs = require('fs');
const path = require('path');
const async = require('async');
const HTTPStatus = require('http-status');

module.exports = function(app, wagner) {
  function isAuthenticated(req, res, next) {
    if (req.session.user){ return next(); }
    else { res.status(403).json({ success: '0', message: "failure", data: "Not Authorized!" }); }
  };

  app.post('/v1/customer/add', function(req, res){
  	wagner.get('Customers')['add'](req).then(function(result){
      res.status(HTTPStatus.OK).json({ success: '1', message: "success", data: result });
  	}).catch(function(error){
      console.log(error);
      res.status(HTTPStatus.NOT_FOUND).json({ success: '0', message: "failure", data: error });
  	});
  });

	app.get('/v1/customer/list', function(req, res){
	  	wagner.get('Customers')['list'](req).then(function(result){
	      res.status(HTTPStatus.OK).json({ success: '1', message: "success", data: result });
	  	}).catch(function(error){
	      console.log(error);
	      res.status(HTTPStatus.NOT_FOUND).json({ success: '0', message: "failure", data: error });
	  	});
	});


	app.post('/v1/customer/vote', function(req, res){
	  	wagner.get('Customers')['vote'](req).then(function(result){
	      res.status(HTTPStatus.OK).json({ success: '1', message: "success", data: result });
	  	}).catch(function(error){
	      console.log(error);
	      res.status(HTTPStatus.NOT_FOUND).json({ success: '0', message: "failure", data: error });
	  	});
	});

	app.get('/v1/customer/view', function(req, res){
       wagner.get('Customers')['view'](req).then(function(result){
          res.status(HTTPStatus.OK).json({ success: '1', message: "success", data: result });
       }).catch(function(error){
          console.log(error);
          res.status(HTTPStatus.NOT_FOUND).json({ success: '0', message: "failure", data: error });
       });
	});

    app.put('/v1/customer/edit', function(req, res){
       wagner.get('Customers')['edit'](req).then(function(result){
          res.status(HTTPStatus.OK).json({ success: '1', message: "success", data: result });
       }).catch(function(error){
          console.log(error);
	      res.status(HTTPStatus.NOT_FOUND).json({ success: '0', message: "failure", data: error });
       });
    });
};

