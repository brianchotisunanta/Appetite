var app = angular.module("restaurantApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })

    .state("restaurants", {
      url: "/restaurants",       //http://localhost:3000/#!/restaurant-list
      templateUrl: "./views/restaurants.html",              //file name in views
      controller: "restaurantListController"
    })

    .state("newRestaurant", {
      url: "/restaurants/new",      //http://localhost:3000/#!/restaurant-form
      templateUrl: "./views/restaurant-fill-in-form.html",    //file name in views
      controller: "restaurantListController"
    })
    .state("updateRestaurant", {
      url: "/restaurants/:id",
      templateUrl: "./views/restaurant-fill-in-form.html",
      controller: "restaurantListController"
    })
})
