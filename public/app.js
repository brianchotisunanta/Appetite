var app = angular.module("newProject", ["ui-router"])

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");

  .$stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })

    .state("restaurant-list", {
      url: "restaurant-list",
      templateUrl: "./views/restaurant-list.html",
      controller: "restaurantController"
    })


}
