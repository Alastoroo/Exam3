var mongoose = require("mongoose");
var Hotel = mongoose.model("Hotel");

module.exports.getAll = function(req, res){
  console.log("get all hotels");
  Hotel
    .find()
    .exec(function(err, hotels){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(hotels);
      }
    });
}
module.exports.addOne = function(req, res){
  console.log("add hotels");
  Hotel
    .create({
      name : req.name,
      country : req.country,
      town : req.town
    },
    function(err,message){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(201).json(hotel);
      }
    });
}
module.exports.getOne = function(req, res){
  console.log("get one hotel");
  var hotelId = req.params.hotelId;
  Hotel
    .findById(hotelId)
    .exec(function(err,hotel){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(hotel);
      }
    });
}
module.exports.updateOne = function(req, res){
  console.log("update one hotel");

  var messageId = req.params.hotelId;
  Hotel
    .findById(hotelId)
    .exec(function(err, hotel){
      if(err){
        res.status(500).json(err);
        return;
      } else if (!hotel) {
        res.status(404).json({
          "hotel" : "Hotel ID not found"+ hotelId
        });
        return;
      }
      hotel.name = req.body.name;
      hotel.country = req.body.country;
      hotel.town = req.body.author;

      hotel
        .save(function(err, hotelUpdated){
          if(err){
            res.status(500).json(err);
          } else {
            res.status(204).json(hotelUpdated);
          }
        });
    });
}
module.exports.deleteOne = function(req, res){
  console.log("delete one Hotel");
  var hotelId = req.params.hotelId;

  Hotel
    .findOneAndRemove({"_id" : hotelId})
    exec(function(err, hotel){
      if(err){
        res.status(500).json(err);
      } else if (!hotel) {
        res.status(404).json({"hotel" : "Hotel ID not found" + hotelId});
      } else {
        res.status(204).json(hotel);
      }
    });
}
