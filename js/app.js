	var app = angular.module("myApp", ["ngRoute"]);
	app.config(function ($routeProvider) {
		$routeProvider.
		when("/", {
			templateUrl: "partials/main.html"
		}).
		when("/menu", {
			templateUrl: "partials/menu.html"
		}).
		when("/aboutus", {
			templateUrl: "partials/aboutus.html"
		}).
		when("/contactus", {
			templateUrl: "partials/contactus.html"
		});


	});