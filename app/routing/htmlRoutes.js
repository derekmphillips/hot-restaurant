var path = require("path");

module.exports = function(app) {


    app.get('/api/:tableData?', function (req, res) {

        res.sendFile(path.join(__dirname + '/app/data/table-data.js'));

        var customers = req.params.tableData;

        if (customers) {
            console.log(customers);

            for (var i = 0; i < tableData.length; i++) {

                if (customers == tableData[i].routeName) {
                    res.json(tableData[i]);
                    return;
                }
            }

            res.json(false);
        }

        else {
            res.json(tableData);
        }
    });



app.get('/', function(req, res){	
	res.sendFile(path.join(__routing + '/home.html'));
})

app.get('/add', function(req, res){	
	res.sendFile(path.join(__routing+ '/reserve.html'));
})

app.get('/add', function(req, res){	
	res.sendFile(path.join(__routing + '/table-logic.html'));
})
