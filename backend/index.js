// import express JS module into app
// and creates its variable.
var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { write } = require("fs");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Creates a server which runs on port 3000 and
// can be accessed through localhost:3000
app.listen(3000, function () {
    console.log("server running on port 3000");
});

// finanical-report API
app.get("/gets/financial-report", getFinReport);
function getFinReport(req, res) {
    finReport = require('../data/financial-reports.json');
    
    res.write(JSON.stringify(finReport));


    
}

// Price Action API
app.get("/gets/price-action", getPriceAction);
function getPriceAction(req, res) {
    
    priceAction = require('../data/price-action.json');
    res.write(JSON.stringify(priceAction));
}


// runnning python script
app.post("/posts/chart-stats", (req, res) => {
    let ticker = req.body.ticker;
    console.log(ticker)
    var spawn = require("child_process").spawn;
    spawn("python", ["../data/alpha2ts.py ", ticker]);

});
