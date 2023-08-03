const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();

//CRUD Tour functions

//Route handlers
router.route('/').get(tourController.getAllTours).post(tourController.addTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

//Export module
module.exports = router;
