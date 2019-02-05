
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , home = require('./routes/home')
  , settings = require('./routes/settings')
  , pcba_test = require('./routes/pcba_test')
  , following_instructions = require('./routes/following_instructions')
  , instruction_pannel = require('./routes/instruction_pannel')
  , running = require('./routes/running')
  , critical_error = require('./routes/critical_error')
  , user_input = require('./routes/user_input')
  , test_failure = require('./routes/test_failure')
  , test_success = require('./routes/test_success');
 
var app = express();

// all environments
app.set('port', process.env.PORT || 3028);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src')));
/*app.use('/', index);
app.use('/users', users);
app.use('/index',index);
app.get('/home', home.home);
app.get('/settings', settings.settings);
app.get('/pcba_test', pcba_test.pcba_test);
app.get('/following_instructions', following_instructions.following_instructions);
app.get('/instruction_pannel', instruction_pannel.instruction_pannel);
app.get('/running', running.running);
app.get('/critical_error', critical_error.critical_error);
app.get('/user_input', user_input.user_input);
app.get('/test_failure', test_failure.test_failure);
app.get('/test_success', test_success.test_success);
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/users', user.list);*/
// development only
//if ('development' == app.get('env')) {
 // app.use(express.errorHandler());
//}
app.get('/home', home.home);
app.get('/settings', settings.settings);
app.get('/pcba_test', pcba_test.pcba_test);
app.get('/following_instructions', following_instructions.following_instructions);
app.get('/instruction_pannel', instruction_pannel.instruction_pannel);
app.get('/running', running.running);
app.get('/critical_error', critical_error.critical_error);
app.get('/user_input', user_input.user_input);
app.get('/test_failure', test_failure.test_failure);
app.get('/test_success', test_success.test_success);
app.get('/', routes.index);
app.get('/index', routes.index);

app.get('/users', user.list);
app.get('/users', user.list);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
