var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {          
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  // Add some routes to get the three HTML files

   // app.get('/api/:tableData?', function (req, res) {

   //      res.sendFile(path.join(__dirname + '/app/data/tableData.js'));

   //      var customers = req.params.tableData;

   //      if (customers) {
   //          console.log(customers);

   //          for (var i = 0; i < tableData.length; i++) {

   //              if (customers == tableData[i].routeName) {
   //                  res.json(tableData[i]);
   //                  return;
   //              }
   //          }

   //          res.json(false);
   //      }

   //      else {
   //          res.json(tableData);
   //      }
   //  });

app.get('/', function(req, res){	
	// res.sendFile(path.join(__routing + '/home.html'));
	res.send("Welcome to the Page!");
})

app.get('/add', function(req, res){	
	res.sendFile(path.join(__routing+ '/reserve.html'));
})

app.get('/add', function(req, res){	
	res.sendFile(path.join(__routing + '/tables.html'));
})
};

