const config = require('config');
const express = require('express');

is_authenticated_controller = {
  'isAuthenticated': function(req, res, next){
  	if(req.session.user){ 
  	  next();	
  	} else {
  	  res.json({ success: '0', message: "failure", data: {message:"Not Logged in!"} });
  	}
  }
};

module.exports = { is_authenticated_controller }
