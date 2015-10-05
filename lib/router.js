Router.route('/', function () {
  this.render('welcome');
});


Router.route('/welcome', function () {
  this.render('welcome');
});

Router.route('/logs', function () {
  this.render('logs');
});


Router.route('/findWorker', function () {
  this.render('findWorker');
});

Router.route('/workerCreateProfile', function () {
  this.render('workerCreateProfile');
});
