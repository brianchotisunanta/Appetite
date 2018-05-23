angular
.module("restaurantApp")
.service("restaurantsService", function($http) {

// GET ALL RESTAURANTS IN THE restaurantList []:
    this.getRestaurantList = function() {
      return $http.get("http://localhost:3000/restaurantList")
    }

// POST:
    this.createRestaurant = function(restaurant) {
      return $http.post("http://localhost:3000/restaurantList", {restaurant: restaurant})

    }

// GET ONE RESTAURANT BY ITS ID:
    this.getRestaurantById = function(id, callback) {
      if ( id == "" || id == undefined || id == null ) {
        var restaurant = {
          id: "",
          name: "",
          address1: "",
          address2: "",
          city: "",
          state: "",
          zipcode: "",
          phoneNumber: "",
          website: "",
          image: ""
        }
        callback(restaurant)
      }
      else {
        $http.get("http://localhost:3000/restaurantList/" + id)
        .then(function(response) {
            console.log(response);
            console.log(response.data.restaurant);
            callback(response.data.restaurant)
        },
        function(error) {
            console.log(error);
        })
      }
    }
    // this.showRestaurant = function(restaurant) {
    //   return $http.get("http://localhost:3000/restaurantList/" + restaurant.id)
    // }

// PUT:
    this.updateRestaurant = function(restaurant) {
      console.log(restaurant);
      return $http.put("http://localhost:3000/restaurantList/" + restaurant.id, {restaurant: restaurant})
    }

// DELETE:
    this.deleteRestaurant = function(restaurant) {
      return $http.delete("http://localhost:3000/restaurantList/" + restaurant.id)
    }
  })

// sidenote:
// restaurant.id = object.key (object { key:value })
