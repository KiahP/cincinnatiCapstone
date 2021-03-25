import React, { Component } from 'react';
import axios from 'axios';
import coney from './Images/coneys.jpg';

const Restaurant = props => (
  <div className="card mb-3 card-style">
  <div className="row g-0">
  <div className="col-md-4">
<img className="shopattractimg" src={props.restaurant.image}  alt=""/>
</div>
<div className="col-md-8">
<div className="card-body card-shopattract-text zooani">
   <h4 className="card-title titlestyle">{props.restaurant.name}</h4>
   <h5 className='card-text wonder'>{props.restaurant.description}</h5>
   <p>{props.restaurant.address} {props.restaurant.city}, {props.restaurant.state} {props.restaurant.zipcode}</p>
 
 
 </div>
 </div>
 </div>
 </div>
)

export default class EatLocal extends Component {
  constructor(props) {  
    super(props); 
    
    
    
    this.state = {restaurants: []};  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/restaurant/')
     .then(response => {
       this.setState({ restaurants: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  eatLocal() {
    return this.state.restaurants.map(currentrestaurant => {
      return <Restaurant restaurant={currentrestaurant} key={currentrestaurant._id}/>;
    })
  }
  render() {
    return (

        
<div className="margin">
<header id="header-section-shop">
      <div className="container-fluid eattophead">
      <div className="header-text">
      <h2 className="bigger-font ">Get a taste of Cincinnati!</h2>
      <p className="bat ">Here are some of the best restaurants in Cincinnati for you to find a new favorite.</p>
      </div>
      </div>
      </header>

      <div className="container-fluid parent phback">
      <div className="shop-info child ">
      <h2 className="shoptextstyle text-center">RESTAURANTS</h2>
      <div >
        <img src={coney} alt="woman shopping" id="coneyimg"/>
       <p className="aqua ">If you like dining out, then Cincinnati is a great town for your taste buds. We have so many wonderful options that span every type of cuisine and every imaginable setting. Whether you’re an avid foodie or you prefer a classic burger and fries, your dream restaurant is waiting for you in the Queen City. If you’d like to try a few new places that are some of the best restaurants in Cincinnati, then consider starting with this list. These restaurants you’ll want to eat at in Cincinnati are diverse, all over town, and offer something for everyone.</p>
      </div>
      </div>
      </div>
{ this.eatLocal() }

</div>
      


    );
  }
}
