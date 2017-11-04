var app = angular.module("restaurantApp", ["ui-router"])

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");

  .$stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })

    .state("restaurants" {
      url: "restaurants",
      templateUrl: "./views/restaurants.html",
      controller: "restaurantListController"
    })

    .state("restaurant-list", {
      url: "restaurant-list",
      templateUrl: "./views/restaurant/list.html",
      controller: "restaurantListController"
    })

    .state("restaurant-list", {
      url: "restaurantform",
      templateUrl: "./views/restaurant/form.html",
      controller: "restaurantListController"
    })



}
