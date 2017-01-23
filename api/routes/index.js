var express = require('express');
var router = express.Router();
var ctrlHotels = require('../controllers/hotels.controllers.js');

router
  .route('/hotels')
  .get(ctrlHotels.getAll)
  .post(ctrlHotels.addOne);
router
  .route('/hotels/:hotelId')
  .get(ctrlHotels.getOne)
  .put(ctrlHotels.uptadeOne)
  .delete(ctrlHotels.deleteOne);


module.export = router;
