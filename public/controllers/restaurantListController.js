angular
    .module('restaurantApp')
    .controller("restaurantListController", function($scope, $state, $stateParams, restaurantsService) {


      // ********** GET ALL the restaurants from the restaurantList[]: **********
      restaurantsService.getRestaurantList()
          .then(function(response) {
                $scope.restaurantList = response.data.restaurantList
                console.log("getRestaurantList function:", response);
          }, function(error) {
                console.log(error);
          })

      // ********** POST A RESTAURANT: **********
      $scope.submitRestaurant = function() {
        restaurantsService.createRestaurant($scope.restaurant)
        .then(function(response) {
              console.log("Submit function:", response);
              $state.go("restaurants")
        }, function(error) {
              console.log(error);
        })
      }

      // ********** GET EACH RESTAURANT BY ITS ID: **********
      if ($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
          $scope.submitButton = true;   // shows the Submit Button
          restaurantsService.getRestaurantById($stateParams.id, function(restaurant) {
              $scope.restaurant = restaurant
        })
      } else {
          $scope.submitButton = false;    // hides the Submit submitButton
          restaurantsService.getRestaurantById($stateParams.id, function(restaurant) {
              $scope.restaurant = restaurant
        })
      }

      // ********** PUT (UPDATE) EACH RESTAURANT BY ID: **********
      $scope.updateRestaurant = function() {
        restaurantsService.updateRestaurant($scope.restaurant)
            .then(function(response) {
                console.log("Update function:", response);
                $state.go("restaurants")
            },
            function(error) {
                  console.log(error);
            })
      }

      // ********** DELETE EACH RESTAURANT: **********
      $scope.deleteRestaurant = function(restaurant) {
        restaurantsService.deleteRestaurant(restaurant)
            .then(function(response) {
                $scope.restaurantList = response.data.restaurantList
                console.log("Delete function:", $scope.restaurantList);
            }, function(error) {
                  console.log(error);
            })
      }
    })
