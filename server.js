// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We'll use this later in our listener
var PORT = 3000;

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// var reservations = [];
// var waitList = [];

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
// Instead of settign up a route for every item here and perhaps
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.get("/", function(req, res) {
  res.send("Welcome to the Page!");
});

// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname + '/app/public/home.html'));
// });

// app.get('/reservations', function(req, res){
//     res.sendFile(path.join(__dirname + '/app/public/reservations.html'));
// });

// app.get('/tables', function(req, res){
//     res.sendFile(path.join(__dirname + '/app/public/tables.html'));
// })

// app.get('/api/:tableData?', function(req, res){

//    res.sendFile(path.join(__dirname + '/app/data/tableData.js'));
    
//     var customer = req.params.tableData;

//    if(customer){
//         console.log(customer);

//        for (var i=0; i <tableData.length; i++){

//            if (customer == tableData[i].routeName){
//                 res.json(tableData[i]);
//                 return;
//             }
//         }

//        res.json(false);
//     }

//    else{
//         res.json(tableData);
//     }
// })

// app.post('/api/new', function(req, res){
    
// })

// };

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
