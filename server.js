const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(express.static('client/build'));

const uri = process.env.ATLAS_URI;
        
mongoose.connect( uri, { useNewUrlParser: true, useCreateIndex: true, 
useUnifiedTopology: true }
);
const connection = mongoose.connection;


connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const restaurantRouter = require('./routes/restaurant');  
const shopRouter = require('./routes/shop');  
const attractionRouter = require('./routes/attraction');  
const historyRouter = require('./routes/history');  

app.use('/restaurant', restaurantRouter);
app.use('/shop', shopRouter);
app.use('/attraction', attractionRouter);
app.use('/history', historyRouter);

if (process.env.NODE_ENV === "production"){
  app.use(express.static('client/build'))
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build'))
  })
};


app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});