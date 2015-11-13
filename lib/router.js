Router.route('/', function () {
  this.render('welcome');
});


Router.route('/welcome', function () {
  this.render('welcome');
});

Router.route('/logs', function () {
  this.render('logs');
});

Router.route('/sandbox', function () {
  this.render('sandbox');
});

Router.route('/createSheet', function () {
  this.render('createSheet');
});

Router.route('/listSheets', function () {
  this.render('listSheets');
});

Router.route('/sheet/:_id', function () {
  this.render('sheet')
});