angular
  .module("restaurantApp")
  .service("restaurantsService", function($http) {

//GET ALL RESTAURANTS IN THE restaurantList []:
    this.getRestaurantList = function() {
      return $http.get("http://localhost:3000/restaurantList")
    }

//POST
    this.createRestaurant = function(restaurant) {
      return $http.post("http://localhost:3000/restaurantList", {restaurant: restaurant})

    }

//GET
    this.showRestaurant = function(restaurant) {
      return $http.get("http://localhost:3000/restaurantList/" + restaurant.id)
    }

//PUT
    this.updateRestaurant = function(restaurant) {
      return $http.put("http://localhost:3000/restaurantList/" + restaurant.id, {restaurant: restaurant})
    }

//DELETE
    this.deleteRestaurant = function(restaurant) {
      return $http.delete("http://localhost:3000/restaurantList/" + restaurant.id)
    }
  })

// sidenote:
// restaurant.id = object.key (object { key:value })
