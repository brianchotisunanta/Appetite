var express = require('express');
var router = express.Router();

var restaurantListController = require("../controllers/restaurant-controller.js")

/* GET www.something.com/restaurants */
router.get('/', restaurantListController.index);

// POST www.something.com/restaurants
router.post('/', restaurantListController.create);

//GET www.something.com/restaurants/:id
router.get('/:id', restaurantListController.show);

//PUT www.something.com/restaurants/:id
router.put('/:id', restaurantListController.update);

//DELETE www.something.com/restaurants/
router.delete('/:id', restaurantListController.destroy);

module.exports = router;
