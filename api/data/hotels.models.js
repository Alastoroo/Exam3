var mongoose = require("mongoose");
var hotelSchema = new mongoose.Schema({
  name : String,
  country : String,
  town : String
});

mongoose.model("Hotel", hotelSchema, "hotel");
