angular.module("myApp").controller("hotelsAddCtrl", hotelsAddCtrl);
function hotelsAddCtrl(hotelsFactory, $location){
  var vm = this;
    vm.addHotels = function(){
      var postData = {
        name : vm.name,
        country : vm.country,
        town : vm.town
      }
      if(vm.hotelsAddForm.$valid){
        hotelsFactory.hotelAddOne(postData).then(function(response){
          if(response.status === 201){
            $location.path('/');
          }
        }).catch(function(error){
          console.log(error);
        });
      }
    }
}
