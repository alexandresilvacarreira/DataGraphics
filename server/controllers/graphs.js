var mongoose = require("mongoose"),
	   Graph = mongoose.model("Graph");

module.exports = (function() {
	return {
		addGraph: function(req, res) {
			var graph = new Graph(req.body);
			graph.save(function (err) {
				if (err) {
					console.log(err)
				} else {
					res.json(true)
				}
			})
		},

		getGraphs: function(req, res) {
			Graph.find({}, function (err, graphs) {
				if (err) {
					console.log(err)
				} else {
					res.json(graphs)
				}
			})
		}
	}
})()