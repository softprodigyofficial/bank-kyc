module.exports = function(app, wagner,passport) {
    require('./v1/user')(app, wagner, passport);
    require('./v1/bank')(app, wagner);
    require('./v1/customer')(app, wagner);
  	require('./ui/index')(app, wagner);
};
