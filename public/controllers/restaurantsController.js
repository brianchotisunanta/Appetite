angular
  .module("restaurantApp")
  .controller("restaurantListController", function($scope, restaurantsService) {

    restaurantsService.getRestaurantList()
    .then(function(response){
      $scope.restaurantList = response.data.restaurantList
    })

    var restaurantId = 11

    var Restaurant = function(restaurantId, restaurantName, restaurantAddress1, restaurantAddress2, restaurantCity, restaurantState, restaurantZipcode,restaurantPhoneNumber, restaurantWebsite) {
      this.id = restaurantId;
      this.name = restaurantName;
      this.address1 = restaurantAddress1;
      this.address2 = restaurantAddress2;
      this.city = restaurantCity;
      this.state = restaurantState;
      this.zipcode = restaurantZipcode;
      this.phoneNumber = restaurantPhoneNumber;
      this.website = restaurantWebsite;
    }

    $scope.name = ""
    $scope.address1 = ""
    $scope.address2 = ""
    $scope.city = ""
    $scope.state = ""
    $scope.zipcode = ""
    $scope.phoneNumber = ""
    $scope.website = ""



//************************ FUNCTIONS ************************

// Submit Button:
    $scope.submitRestaurant = function() {
      restaurantsService.createRestaurant(new Restaurant(restaurantId++,
      $scope.name,
      $scope.address1,
      $scope.address2,
      $scope.city,
      $scope.state,
      $scope.zipcode,
      $scope.phoneNumber,
      $scope.website))
      .then(function(response) {
        $scope.restaurantList = response.data.restaurantList
      })


      $scope.name = ""
      $scope.address1 = ""
      $scope.address2 = ""
      $scope.city = ""
      $scope
      $scope.zipcode = ""
      $scope.phoneNumber = ""
      $scope.website = ""

      //Warning for submitting blank input filed:
          // $scope.missingName = function(name) {
          //   if ($scope.name == ""){
          //     missingName == true;
          //   }
          // }

    }

    var currentRestaurantId = null;
    $scope.submitButton = true;       //shows Submit Button
    $scope.saveButton = false;        //hides Save Button

// Update Button:
    $scope.updateRestaurant = function(updatedRestaurant) {
      currentRestaurantId = updatedRestaurant.id;
      $scope.name = updatedRestaurant.name;
      $scope.address1 = updatedRestaurant.address1;
      $scope.address2 = updatedRestaurant.address2;
      $scope.city = updatedRestaurant.city;
      $scope.state = updatedRestaurant.state;
      $scope.zipcode = updatedRestaurant.zipcode;
      $scope.phoneNumber = updatedRestaurant.phoneNumber;
      $scope.website = updatedRestaurant.website;

      $scope.submitButton = false;    //hide
      $scope.saveButton = true;       //show
    }

//Save Button:
    $scope.saveRestaurant = function() {
      var restaurant = new Restaurant(currentRestaurantId, $scope.name, $scope.address1, $scope.address2, $scope.city, $scope.state, $scope.zipcode, $scope.phoneNumber,$scope.website)

      restaurantsService.updateRestaurant(restaurant)
      .then(function(response) {
        $scope.restaurantList = response.data.restaurantList
      })

      $scope.submitButton = true;   //show
      $scope.saveButton = false;    //hide

      currentRestaurantId = null;
      $scope.name = "";
      $scope.address1 = "";
      $scope.address2 = "";
      $scope.city = "";
      $scope.state = "";
      $scope.zipcode = "";
      $scope.phoneNumber = "";
      $scope.website = "";
    }

//Delete Button:
    $scope.deleteRestaurant = function(restaurant) {
      restaurantsService.deleteRestaurant(restaurant)
        .then(function(response){
          $scope.restaurantList = response.data.restaurantList
        })
    }
  })
