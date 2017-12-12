angular
  .module("restaurantApp")
  .controller("restaurantListController", function($scope, restaurantsService) {

    restaurantsService.getRestaurantList()
    .then(function(response){
      $scope.restaurantList = response.data.restaurantList
    })

//Billy please look at restaurantID:
    var restaurantId = 11;

//Billy please look at my constructor:
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

// SUBMIT Button: (THIS WORKS)
    $scope.submitRestaurant = function() {
      console.log("Submit button test");
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
      $scope.state = ""
      $scope.zipcode = ""
      $scope.phoneNumber = ""
      $scope.website = ""

//Warning for submitting blank input filed:     (FIX THIS)
      $scope.missingName = function(name) {
        if ($scope.name == ""){
          return missingName == true;
        } else {
          return name;
        }
      }

      console.log($scope.restaurantList);
    }

    var currentRestaurantId = null;
    $scope.submitButton = true;       //shows Submit Button
    $scope.saveButton = false;        //hides Save Button

//BIlly please look at my UPDATE Function; R.values are named based on my constructor value naming scheme:
// UPDATE Button: (NOT WORKING)
    $scope.updateRestaurant = function(R) {
      console.log("Update button test");
      currentRestaurantId = R.restaurantId;
      $scope.name = R.name;
      $scope.address1 = R.address1;
      $scope.address2 = R.address2;
      $scope.city = R.city;
      $scope.state = R.state;
      $scope.zipcode = R.zipcode;
      $scope.phoneNumber = R.phoneNumber;
      $scope.website = R.website;

    // $scope.updateRestaurant = function(R) {
    //   currentRestaurantId = R.restaurantId;
    //   $scope.name = R.restaurantName;
    //   $scope.address1 = R.restaurantAddress1;
    //   $scope.address2 = R.restaurantAddress2;
    //   $scope.city = R.restaurantCity;
    //   $scope.state = R.restaurantState;
    //   $scope.zipcode = R.restaurantZipcode;
    //   $scope.phoneNumber = R.restaurantPhoneNumber;
    //   $scope.website = R.restaurantWebsite;

      $scope.submitButton = false;    //hide
      $scope.saveButton = true;       //show
    }

//Billy please look at my SAVE Function:
//SAVE Button: (NOT WORKING)
    $scope.saveRestaurant = function() {
      console.log("Save button test");
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

      $scope.showRestaurant = true;

    }

//DELETE Button: (THIS WORKS)
    $scope.deleteRestaurant = function(restaurant) {
      console.log("Delete button test");
      restaurantsService.deleteRestaurant(restaurant)
        .then(function(response){
          $scope.restaurantList = response.data.restaurantList
        })

        console.log($scope.restaurantList);
    }
  })
