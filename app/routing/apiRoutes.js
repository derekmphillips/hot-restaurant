var bodyParser = require('body-parser');
var path = require('path');

module.exports

var express = require('express');
var bodyParser = require('body-parser');


    app.get('/api/:waitinglist-data?', function (req, res) {

        res.sendFile(path.join(__dirname + '/app/data/waitinglist-data.js'));

        var wait = req.params.waitData;

        if (wait) {
            console.log(wait);

            for (var i = 0; i < waitData.length; i++) {

                if (customers == waitData[i].routeName) {
                    res.json(waitData[i]);
                    return;
                }
            }

            res.json(false);
        }

        else {
            res.json(waitData);
        }
    })

};