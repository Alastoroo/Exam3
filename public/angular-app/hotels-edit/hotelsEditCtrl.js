angular.module("myApp").controller("hotelsEditCtrl",hotelsEditCtrl);
  function hotelsEditCtrl(hotelsFactory, $location, $routeParams){
    var vm = this;
    var hotelsId = $routeParams.hotelsId;
    vm.hotel = null;
    hotelsFactory.hotelGetOne(hotelId).then(function(response){
      vm.hotel = response.data;
    });
    vm.editMessages = function(){
      var postData = {
        name : vm.hotel.name,
        country : vm.hotel.country,
        town : vm.hotel.town
      }
      if(vm.hotelsEditForm.$valid){
        hotelsFactory.hotelUpdate(hotelId,postData).then(function(response){
          if(response.status === 204){
            $location.path('/');
          }
        }).catch(function(error){
          console.log(error);
        });
      }
    }
  }
