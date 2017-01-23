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
    .otherwise({redirectTo : "/"});
}
