const router = require('express').Router();
let Attraction = require('../models/attraction.model');


router.route('/').get((req, res) => {
  Attraction.find()
    .then(attractions => res.json(attractions))
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

  const newAttraction = new Attraction({
    name,
    description,
    image,
    address,
    city,
    state,
    zipcode,
  });


  newAttraction.save()
    .then(() => res.json('Attraction added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {  
  Attraction.findById(req.params.id)  
    .then(attraction => res.json(attraction))  
    .catch(err => res.status(400).json('Error: ' + err));  
});  
router.route('/:id').delete((req, res) => {  
  Attraction.findByIdAndDelete(req.params.id)  
    .then(() => res.json('Attraction deleted.'))  
    .catch(err => res.status(400).json('Error: ' + err));  
});  
router.route('/update/:id').post((req, res) => {  
  Attraction.findById(req.params.id)  
    .then(attraction => {  
      Attraction.name = req.body.name;  
      Attraction.description = req.body.description;  
      Attraction.image = req.body.image;  
      Attraction.address = req.body.address; 
      Attraction.city = req.body.city;  
      Attraction.state = req.body.state;
      Attraction.zipcode = Number (req.body.zipcode); attraction.save()  
        .then(() => res.json('Attraction updated!'))  
        .catch(err => res.status(400).json('Error: ' + err));  
    })  
    .catch(err => res.status(400).json('Error: ' + err));  
});


module.exports = router;