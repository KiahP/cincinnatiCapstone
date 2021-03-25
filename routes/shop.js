const router = require('express').Router();
let Shop = require('../models/shop.model');


router.route('/').get((req, res) => {
  Shop.find()
    .then(shops => res.json(shops))
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

  const newShop = new Shop({
    name,
    description,
    image,
    address,
    city,
    state,
    zipcode,
  });


  newShop.save()
    .then(() => res.json('Shop added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {  
  Shop.findById(req.params.id)  
    .then(shop => res.json(shop
      
      ))  
    .catch(err => res.status(400).json('Error: ' + err));  
});  
router.route('/:id').delete((req, res) => {  
  Shop.findByIdAndDelete(req.params.id)  
    .then(() => res.json('Shop deleted.'))  
    .catch(err => res.status(400).json('Error: ' + err));  
});  
router.route('/update/:id').post((req, res) => {  
  Shop.findById(req.params.id)  
    .then(attraction => {  
      Shop.name = req.body.name;  
      Shop.description = req.body.description;  
      Shop.image = req.body.image;  
      Shop.address = req.body.address; 
      Shop.city = req.body.city;  
      Shop.state = req.body.state;
      Shop.zipcode = Number (req.body.zipcode); shop.save()  
        .then(() => res.json('Shop updated!'))  
        .catch(err => res.status(400).json('Error: ' + err));  
    })  
    .catch(err => res.status(400).json('Error: ' + err));  
});

module.exports = router;