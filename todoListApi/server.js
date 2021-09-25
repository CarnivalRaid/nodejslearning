const express = require('express'),
app = express(),
port = process.env.PORT || 3000,

mongoose = require('mongoose'),
Task = require('./api/models/todoListModel'),
bodyParser = require('body-parser');

//mongoose instance connection url connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let routes = require('./api/routes/todoListRoutes')
routes(app);

require('events').EventEmitter.defaultMaxListeners = 4;


app.listen(port)
console.log(`todo list RESTfull API server started on ${port}`);
let s = process.on('warning', e => console.warn(e.stack));
/*console.log(s)
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
  */