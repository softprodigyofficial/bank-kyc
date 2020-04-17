'use strict';
const fs = require('fs');
const path = require('path');
const async = require('async');
const bcrypt = require("bcryptjs");
const HTTPStatus = require('http-status');

module.exports = function(app, wagner) {
  function isAuthenticated(req, res, next) {
    if (req.session.user){ return next(); }
    else { res.status(403).json({ success: '0', message: "failure", data: "Not Authorized!" }); }
  };

  app.post('/v1/bank/add', function(req, res){
    wagner.get('Banks')['add'](req).then(function(result){
      res.status(HTTPStatus.OK).json({ success: '1', message: "success", data: result });
    }).catch(function(error){
      console.log(error);
      res.status(HTTPStatus.NOT_FOUND).json({ success: '0', message: "failure", data: error });
    });
  });

  app.get('/v1/bank/list', function(req, res){
    wagner.get('Banks')['list'](req).then(function(result){
      res.status(HTTPStatus.OK).json({success: '1', message: "success", data: result });
    }).catch(function(error){
      console.log(error);
      res.status(HTTPStatus.NOT_FOUND).json({ success: '0', message: "failure", data: error });
    });
  });

  app.get('/v1/bank/show/:wallet_address', function(req, res){
    wagner.get('Banks')['show'](req.params).then(function(result){
      res.status(HTTPStatus.OK).json({success: '1', message: "success", data: result });
    }).catch(function(error){
      console.log(error);
      res.status(HTTPStatus.NOT_FOUND).json({ success: '0', message: "failure", data: error });
    });
  });

  app.post('/v1/bank/delete', function(req, res){
    wagner.get('Banks')['delete'](req.body).then(function(result){
      res.status(HTTPStatus.OK).json({success: '1', message: "success", data: result });
    }).catch(function(error){
      console.log(error);
      res.status(HTTPStatus.NOT_FOUND).json({ success: '0', message: "failure", data: error });
    });
  });

  app.post('/v1/bank/upvotebank', function(req, res){
    wagner.get('Banks')['upvotebank'](req).then(function(result){
      res.status(HTTPStatus.OK).json({success: '1', message: "success", data: result });
    }).catch(function(error){
      console.log(error);
      res.status(HTTPStatus.NOT_FOUND).json({ success: '0', message: "failure", data: error });
    });
  });

  app.post('/v1/bank/request/add', function(req, res){
    wagner.get('Banks')['add_bank_request'](req).then(function(result){
      res.status(HTTPStatus.OK).json({success: '1', message: "success", data: result });
    }).catch(function(error){
      console.log(error);
      res.status(HTTPStatus.NOT_FOUND).json({ success: '0', message: "failure", data: error });
    });
  });

  app.get('/v1/bank/request/list', function(req, res){
    wagner.get('Banks')['list_bank_request'](req).then(function(result){
      res.status(HTTPStatus.OK).json({success: '1', message: "success", data: result });
    }).catch(function(error){
      console.log(error);
      res.status(HTTPStatus.NOT_FOUND).json({ success: '0', message: "failure", data: error });
    });
  });
};
