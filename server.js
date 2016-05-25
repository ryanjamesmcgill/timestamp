'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');

var app = express();



app.use('/public', express.static(process.cwd() + '/public'));
routes(app);

app.listen((process.env.PORT || 3000), function () {
   if(process.env.PORT){
       console.log('Node.js listening on port ' + process.env.PORT + '...');
   } else {
       console.log('Node.js listening on port 3000...');
   }
});
