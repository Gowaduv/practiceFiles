// Creates the addCtrl Module and Controller. Note that it depends on the 'geolocation' module and service.
var addCtrl = angular.module('addCtrl', ['geolocation', 'gservice']);
addCtrl.controller('addCtrl', function($scope, $http, $rootScope, geolocation, gservice){

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};
    var coords = {};
    var lat = 0;
    var long = 0;

    // Set initial coordinates to the center of the US
    $scope.formData.latitude = 39.500;
    $scope.formData.longitude = -98.350;

    // Get User's actual coordinates based on HTML5 at window load
    geolocation.getLocation().then(function(data) {

      // Set the lat and lon equal to the HTML5 coords
      coords = {lat: data.coords.latitude, long: data.coords.longitude};

      // Display coordinates in location boxes, round to 3 places
      $scope.formData.longitude = parseFloat(coords.long).toFixed(3);
      $scope.formData.latitude = parseFloat(coords.lat).toFixed(3);

      // Display message confirming that coords are verified
      $scope.formData.htmlverified = "Coordinates verified!";
      gservice.refresh($scope.formData.latitude, $scope.formData.longitude);

    });

    // Functions
    // ----------------------------------------------------------------------------
    // Get coords based on mouse click.
    $rootScope.$on("clicked", function() {
      // run the gservice functions associated with identifying coords
      $scope.$apply(function() {
        $scope.formData.latitude = parseFloat(gservice.clickLat).toFixed(3);
        $scope.formData.longitude = parseFloat(gservice.clickLong).toFixed(3);
        $scope.formData.htmlverified = "Coords not verified";
      });
    });

    // Creates a new user based on the form fields
    $scope.createUser = function() {

        // Grabs all of the text box fields
        var userData = {
            username: $scope.formData.username,
            gender: $scope.formData.gender,
            age: $scope.formData.age,
            favlang: $scope.formData.favlang,
            location: [$scope.formData.longitude, $scope.formData.latitude],
            htmlverified: $scope.formData.htmlverified
        };

        // Saves the user data to the db
        $http.post('/users', userData)
            .success(function (data) {

                // Once complete, clear the form (except location)
                $scope.formData.username = "";
                $scope.formData.gender = "";
                $scope.formData.age = "";
                $scope.formData.favlang = "";

            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
            gservice.refresh($scope.formData.latitude, $scope.formData.longitude)
    };
});
