var tableData = require('../data/tableData');
var waitListData = require('../data/waitinglist');

module.exports = function(app) {

// app.get('/api/make-a-reservation', function (req, res) {
//     res.json(tableData) 
// });

app.get('/api/waitlist', function (req, res) {
    res.json(waitListData) 
});

app.get('/api/tables', function (req, res) {
    res.json(tableData) 
});

app.post('/api/tables', function (req, res) {

if (tableData.length < 5) {
    tableData.push(req.body);
    res.json(true);
    }
else{
    waitinglistData.push(req.body);
    res.json(false);
    }
});

app.post('/api/clear', function () {
    tableData = [];
    waitinglistData = [];

    console.log(tableData);
});
};

