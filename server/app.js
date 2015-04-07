// Depenedencies
var express = require('express');
var bodyParser = require('body-parser');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Routes
app.use("/", express.static(__dirname + "/../client"));
app.use('/api', require('./controllers/api'));

// sets port 8080 to default or unless otherwise specified in the environment
app.set('port', process.env.PORT || 8080);

// app.listen(3000);
app.listen(app.get('port'));
console.log('API is running on port ' + app.get('port'));