dataModule.factory("graphFactory", function ($http) {
	return {
		addGraph: function(details, callback) {
			$http.post("/addGraph", details).success(function() {
				callback()
			})
		},

		getGraphs: function(callback) {
			$http.get("/getGraphs").success(function (graphs) {
				callback(graphs)
			})
		}
	}
})