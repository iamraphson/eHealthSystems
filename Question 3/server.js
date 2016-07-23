/**
 * Created by Raphson on 7/23/16.
 */
var express = require("express"),
    morgan        = require('morgan'),
    bodyParser    = require('body-parser'),
    cors          = require('cors');

var port = process.env.port || 3000;

/**
 * Create Express Server
 */
var app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true})); //use bodyParser for request and parsing info
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public')); //use to serve static files like favicon, css, angular and the rest

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html' );
});


/**
 * Start Express server.
 */
app.listen( port, function(){
    console.log("Server Listening on port " + port );
});