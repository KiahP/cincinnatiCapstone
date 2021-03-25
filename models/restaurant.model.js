const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const restaurantSchema = new Schema({

        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        address: { type: String, required: true },
        city: {type: String, required: true},
        state: {type: String, required: true},
        zipcode: {type: Number, required: true},

  
      });


const Restaurant = mongoose.model('Restaurant', restaurantSchema);


module.exports = Restaurant;