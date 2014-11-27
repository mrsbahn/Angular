var photoApp = angular.module("photoSharingApp", [ "ngRoute" ]);
// setup routing
photoApp.config(function($routeProvider){
	$routeProvider
	.when("/albums", {controller: "AlbumListController", templateUrl: "app/partials/album_list_partial.html"})
	.when("/",{redirectTo: "/albums"})
	.when("/404_page", {controller: "Controller404", templateUrl: "app/partials/404_page_partial.html"})
	.otherwise({redirectTo: "/404_page"});

});	