var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/client")));
app.use("/csv", express.static(path.join(__dirname, "/datasets")));
app.use("/tsv", express.static(path.join(__dirname, "/datasets")));
app.use("/json", express.static(path.join(__dirname, "/datasets")));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(7000);