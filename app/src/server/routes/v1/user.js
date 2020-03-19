const fs         = require('fs');
const path       = require('path');
const async      = require('async');
const HTTPStatus = require('http-status');

module.exports = function(app, wagner) {
   app.post('/v1/admin/login', function(req, res) {
   	 wagner.get('User')["admin_login"](req).then(function(result){
        res.status(HTTPStatus.OK).json({ success: '1', message: "success", data: result });
   	 }).catch(function(error){
        console.log(error);
        res.status(HTTPStatus.NOT_FOUND).json({ success: '0', message: "failure", data: error });
   	 });
   })
};