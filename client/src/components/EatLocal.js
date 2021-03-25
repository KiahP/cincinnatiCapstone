import React, { Component } from 'react';
import axios from 'axios';
import {BACKEND_URL} from '../config'

const Restaurant = props => (
<div className="container col-md-4 d-flex Eats">
 <div className="card border-transparent">
<img className="card-img-top" id="EatImg" src={props.restaurant.image} alt=""/>
 <div className="card-body">
    <h4 className="card-title">{props.restaurant.name}</h4>
    <h5>{props.restaurant.address} {props.restaurant.city} {props.restaurant.state} {props.restaurant.zipcode}</h5>
    <p className='card-text'>{props.restaurant.description}</p>
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
    // eslint-disable-next-line no-useless-concat
    axios.get(BACKEND_URL + 'restaurant/')
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
        
      <div className="text-center opener">
        <h1>Get a taste of Cincinnati!</h1>
        <span >If you like dining out, then Cincinnati is a great town for your taste buds. We have so many wonderful options that span every type of cuisine and every imaginable setting. Whether you’re an avid foodie or you prefer a classic burger and fries, your dream restaurant is waiting for you in the Queen City. If you’d like to try a few new places that are some of the best restaurants in Cincinnati, then consider starting with this list. These restaurants you’ll want to eat at in Cincinnati are diverse, all over town, and offer something for everyone.</span>


<div className="card-deck">
{ this.eatLocal() }
</div>
</div>
      


    );
  }
}
