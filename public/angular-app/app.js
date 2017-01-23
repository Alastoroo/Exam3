var app = angular.module("myApp", ["ngRoute"]).config(config);

function config($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl : "angular-app/home/home.html",
      controller : "honeCtrl",
      controllerAs : "vm"
    })
    .when('/hotels/add', {
      templateUrl : "angular-app/hotels/hotels-add/hotel.html",
      controller : "hotelsAddCtrl",
      controllerAs : "vm"
    })
    .when('/hotels/edit/:hotelId',{
      templateUrl : "angular-app/hotels/hotels-edit/hotel.html",
      controller : "hotelsEditCtrl",
      controllerAs : "vm"
    })
    .otherwise({redirectTo : "/"});
}
