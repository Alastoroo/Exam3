angular.module("myApp").factory("hotelsFactory",hotelsFactory);
function hotelsFactory($http){
  return{
    hotelGetAll : hotelGetAll,
    hotelAddOne : hotelAddOne,
    hotelUpdateOne : hotelUpdateOne,
    hotelGetOne : hotelGetOne,
    hotelDelete : hotelDelete
  }
  function hotelGetAll(){
    return $http.get("/api/hotels").then(complete).catch(error);
  }
  function hotelAddOne(data){
    return $http.post("/api/hotels",data).then(complete).catch(error);
  }
  function hotelUpdateOne(id, data){
    return $http.put("/api/hotels"+id,data).then(complete).catch(error);
  }
  function hotelGetOne(id){
    return $http.get("/api/hotels"+id).then(complete).catch(error);
  }
  function hotelDelete(id){
    return $http.delete("/api/hotels"+id).then(complete).catch(error);
  }
  function complete(response){
    return response;
  }
  function error(error){
    return error;
  }
}
