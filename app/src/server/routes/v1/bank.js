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
};
