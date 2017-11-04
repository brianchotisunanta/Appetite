angular
  .module("restaurantApp")
  .service("service", function($http) {

    //GET ALL MOVIES
    this.getRestaurantList = function() {
      return $http.get("http://localhost:3000/restaurantList")
    }

  })
