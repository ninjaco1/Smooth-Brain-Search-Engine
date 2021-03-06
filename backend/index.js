// import express JS module into app
// and creates its variable.
var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { write, read } = require("fs");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const fetch = require("node-fetch");
const request = require("request");

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
    finReport = require("./financial-reports.json");

    // res.write(JSON.stringify(finReport));
    res.send(JSON.stringify(finReport));
}

// Price Action API
app.get("/gets/price-action", getPriceAction);
function getPriceAction(req, res) {
    priceAction = require("./price-action.json");
    // res.write(JSON.stringify(priceAction));
    res.send(JSON.stringify(priceAction));
}

function reqListener() {
    console.log(this.responseText);
}

app.post("/posts/random", (req, res) => {
    let ticker;

    let resp;

    request(
        { uri: "https://raybb.github.io/random-stock-picker/" },
        function (error, response, body) {
            let text = body.toString();
            const dom = new JSDOM(text);
            console.log(dom.window.document.getElementById("ticker").textContent + " lol");
            ticker = dom.window.document.getElementById("ticker").textContent;
        }
    );

    // fetch("https://raybb.github.io/random-stock-picker/").then(resp => response = resp);
    // console.log(response);
    

    var { spawn } = require("child_process");
    var process = spawn("python", ["../data/alpha2ts.py", ticker]);

    console.log("script executed");

    // process.on("exit", function (code, signal) {
    //     console.log(
    //         "child process exited with " + `code ${code} and signal ${signal}`
    //     );
    //     res.status(200).end();
    // });

    res.status(200).end();
});

// runnning python script
app.post("/posts/chart-stats", (req, res) => {
    let ticker = req.body.ticker;
    console.log(ticker);

    var { spawn } = require("child_process");
    var process = spawn("python", ["../data/alpha2ts.py", ticker]);

    console.log("script executed");

    // process.on("exit", function (code, signal) {
    //     console.log(
    //         "child process exited with " + `code ${code} and signal ${signal}`
    //     );
    //     res.status(200).end();
    // });

    res.status(200).end();

    // res.sendStatus(200);

    // process.stdout.on("data", function (data) {
    //     console.log(data.toString());
    //     res.send(data.toString());
    //     res.end("end");
    // });
});
