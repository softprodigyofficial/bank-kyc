const fs = require('fs');
const path = require('path');
const async = require('async');
const bcrypt = require("bcryptjs");
const HTTPStatus = require('http-status');

module.exports = function(app, wagner, passport) {
   app.post('/v1/admin/login', async (req, res) => {
     passport.authenticate('local', (err, user, info) => {
       if (!user) { res.status(HTTPStatus.NOT_FOUND).json({ success: '0', message: "failure", data: info }); }
       else { res.status(HTTPStatus.OK).json({ success: '1', message: "success", data: info }); }
     })(req, res);
   })
};
