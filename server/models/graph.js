var mongoose = require("mongoose");

var graphSchema = new mongoose.Schema({
	heading: String,
	caption: String,
	imageSrc: String,
	partialSrc: String
})

mongoose.model("Graph", graphSchema);