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

      //Warning for submitting blank input filed:
          $scope.missingName = function() {
            if ($scope.name == ""){
              missingName == true;
            }
            else {
              missingName == false;
            }
          }

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


    }

    var currentRestaurantId = null;
    $scope.submitButton = true;       //shows Submit Button
    $scope.saveButton = false;        //hides Save Button

// Update Button:
    $scope.updateRestaurant = function(updatedRestaurant) {
      currentRestaurantId = updatedRestaurant.restaurantId;
      $scope.name = updatedRestaurant.restaurantName;
      $scope.address1 = updatedRestaurant.restaurantAddress1;
      $scope.address2 = updatedRestaurant.restaurantAddress2;
      $scope.city = updatedRestaurant.restaurantCity;
      $scope.state = updatedRestaurant.restaurantState;
      $scope.zipcode = updatedRestaurant.restaurantZipcode;
      $scope.phoneNumber = updatedRestaurant.restaurantPhoneNumber;
      $scope.website = updatedRestaurant.restaurantWebsite;

      $scope.submitButton = false;    //hide
      $scope.saveButton = true;       //show
    }

//Save Button:
    $scope.saveRestaurant = function() {
      var restaurant = new Restaurant(restaurantId, $scope.restaurantName, $scope.restaurantAddress1, $scope.restaurantAddress2, $scope.restaurantCity, $scope.restaurantState, $scope.restaurantZipcode, $scope.restaurantPhoneNumber, $scope.restaurantWebsite)

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
