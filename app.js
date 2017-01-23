require('./api/data/db.js');//ajout de la base de données
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var routes = require('./api/routes');

app.set('port', 3000);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('api', routes);
var server = app.listen(app.get('port'),function(){
  var port = server.address().port;
  console.log('Magic happens on port' + port);
});
