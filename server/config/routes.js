var graphs = require("./../controllers/graphs.js");

module.exports = function (app) {
	app.post("/addGraph", function (req, res) {
		graphs.addGraph(req, res)
	})

	app.get("/getGraphs", function (req, res) {
		graphs.getGraphs(req, res)
	})
}