	var app = angular.module("myApp", ["ngRoute"]);

	app.controller("menuController",function($scope){
		
	})
	app.config(function ($routeProvider) {
		$routeProvider.
		when("/", {
			templateUrl: "partials/main.html"
		}).
		when("/menu", {
			templateUrl: "partials/menu.html",
			controller:"menuController"
		}).
		when("/aboutus", {
			templateUrl: "partials/aboutus.html"
		}).
		when("/contactus", {
			templateUrl: "partials/contactus.html"
		});


	});