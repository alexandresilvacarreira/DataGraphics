dataModule.controller("mainController", function (graphFactory) {
	var self = this;

	var getGraphs = function() {
		graphFactory.getGraphs(function (graphs) {
			self.graphs = graphs;
		})
	}

	getGraphs()

	this.addGraph = function(details) {
		graphFactory.addGraph(details, function() {
			getGraphs();
		})
		self.newGraph = {};
	}
})