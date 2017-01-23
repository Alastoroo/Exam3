angular.module("myApp").controller("homeCtrl",homeCtrl);
function homeCtrl(hotelsFactory){
  var vm = this;
  vm.home = null;

  hotelsFactory.hotelGetAll().then(function(response){
    vm.hotels = response.data;
  });
    vm.hotels = function(id){
      hotelsFactory.hotelDelete(id).then(function(response){
        if(response.status === 204){
          $route.reload();
        }
      }).catch(function(error){
        console.log(error);
      });
    }
