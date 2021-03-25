const router = require('express').Router();
let History = require('../models/history.model');


router.route('/').get((req, res) => {
  History.find()
    .then(historys => res.json(historys))
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

  const newHistory = new History({
    name,
    description,
    image,
    address,
    city,
    state,
    zipcode,
  });


  newHistory.save()
    .then(() => res.json('History added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {  
  History.findById(req.params.id)  
    .then(history => res.json(history))  
    .catch(err => res.status(400).json('Error: ' + err));  
});  
router.route('/:id').delete((req, res) => {  
  History.findByIdAndDelete(req.params.id)  
    .then(() => res.json('History deleted.'))  
    .catch(err => res.status(400).json('Error: ' + err));  
});  
router.route('/update/:id').post((req, res) => {  
  History.findById(req.params.id)  
    .then(history => {  
      History.name = req.body.name;  
      History.description = req.body.description;  
      History.image = req.body.image;  
      History.address = req.body.address; 
      History.city = req.body.city;  
      History.state = req.body.state;
      History.zipcode = Number (req.body.zipcode); history.save()  
        .then(() => res.json('History updated!'))  
        .catch(err => res.status(400).json('Error: ' + err));  
    })  
    .catch(err => res.status(400).json('Error: ' + err));  
});


module.exports = router;