var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(app) {

// app.get('/api/make-a-reservation', function (req, res) {
//     res.json(tableData) 
// });

app.get('/api/waitlist', function (req, res) {
    res.json(waitListData) 
});

app.post('/api/tables', function (req, res) {

if (tableData.length<5) {
    tableData.push()
}

});

}

