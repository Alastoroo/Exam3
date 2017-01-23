angular.module("myApp").controller("homeCtrl",homeCtrl);
function homeCtrl(hotelsFactory){
  var vm = this;
  vm.home = null;

  hotelsFactory.hotelGetAll().then(function(response){
    vm.hotels = response.data;
  });
