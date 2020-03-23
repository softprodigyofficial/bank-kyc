module.exports = function(app, wagner,passport) {
    require('./v1/user')(app, wagner, passport);
  	require('./ui/index')(app, wagner);
};
