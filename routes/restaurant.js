const router = require('express').Router();
let Restaurant = require('../models/restaurant.model');


router.route('/').get((req, res) => {
  Restaurant.find()
    .then(restaurants => res.json(restaurants))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const image = req.body.image;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zipcode = req.body.zipcode;

  const newRestaurant = new Restaurant({
    name,
    description,
    image,
    address,
    city,
    state,
    zipcode,
  });


  newRestaurant.save()
    .then(() => res.json('Restaurant added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {  
  Restaurant.findById(req.params.id)  
    .then(restaurant => res.json(restaurant))  
    .catch(err => res.status(400).json('Error: ' + err));  
});  
router.route('/:id').delete((req, res) => {  
  Restaurant.findByIdAndDelete(req.params.id)  
    .then(() => res.json('Restaurant deleted.'))  
    .catch(err => res.status(400).json('Error: ' + err));  
});  
router.route('/update/:id').post((req, res) => {  
  Restaurant.findById(req.params.id)  
    .then(attraction => {  
      Restaurant.name = req.body.name;  
      Restaurant.description = req.body.description;  
      Restaurant.image = req.body.image;  
      Restaurant.address = req.body.address; 
      Restaurant.city = req.body.city;  
      Restaurant.state = req.body.state;
      Restaurant.zipcode = Number (req.body.zipcode); restaurant.save()  
        .then(() => res.json('Restaurant updated!'))  
        .catch(err => res.status(400).json('Error: ' + err));  
    })  
    .catch(err => res.status(400).json('Error: ' + err));  
});

module.exports = router;