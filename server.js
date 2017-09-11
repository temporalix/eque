var express = require("express"),
path = require('path'),
bodyParser = require('body-parser'),
app = express(),
port = process.env.PORT || 3001,
cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/equalizerRoutes');
routes(app);


// app.use('/scripts',express.static(path.join(__dirname, '/scripts')));

// app.get("/", function(req, res){
//      res.sendFile(path.join(__dirname,"/index.html"));
// });


app.listen(port);
console.log('equalizer api server started on: '+ port);

module.exports = app;