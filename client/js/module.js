var dataModule = angular.module("dataApp", ["ngRoute"]);

dataModule.config(function ($routeProvider) {
	$routeProvider
	.when("/charts", {
		templateUrl: "/partials/charts.html"
	})
	.when("/city-population-density", {
		templateUrl: "/partials/city-population-density.html"
	})
	.when("/generic-barchart", {
		templateUrl: "/partials/generic-barchart.html"
	})
	.when("/simple-graph", {
		templateUrl: "/partials/simple-graph.html"
	})
	.when("/add-chart", {
		templateUrl: "/partials/add-chart.html"
	})
	.when("/create-image", {
		templateUrl: "/partials/create-image.html"
	})
	.when("/simple-pie-chart", {
		templateUrl: "/partials/simple-pie-chart.html"
	})
	.when("/donut-chart", {
		templateUrl: "/partials/donut-chart.html"
	})
	.otherwise({ redirectTo: "/charts" })
})