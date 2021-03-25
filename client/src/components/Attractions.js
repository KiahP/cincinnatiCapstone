import React, { Component } from 'react';
import axios from 'axios';
import "../index.css";
import Attract2 from './Images/attractpage2.jpg';

const Attraction = props => (



   <div className="card mb-3 card-style" id="card-style">
  <div className="row g-0">
  <div className="col-md-4">
<img className="shopattractimg" src={props.attraction.image}  alt=""/>
</div>
<div className="col-md-8">
<div className="card-body card-shopattract-text zooani">
   <h4 className="card-title titlestyle">{props.attraction.name}</h4>
   <p className='card-text wonder'>{props.attraction.description}</p>
   <p>{props.attraction.address} {props.attraction.city}, {props.attraction.state} {props.attraction.zipcode}</p>
 
 
 </div>
 </div>
 </div>
 </div>

  
)

export default class Attractions extends Component {
  constructor(props) {  
    super(props); 
    
    
    
    this.state = {cincyAttractions: []};  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/attraction/')
     .then(response => {
       this.setState({ cincyAttractions: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  Attractions() {
    return this.state.cincyAttractions.map(currentattraction => {
      return <Attraction attraction={currentattraction} key={currentattraction._id}/>;
    })
  }
  render() {
    return (

      <div >

      
      <header id="header-section-shop">
      <div className="container-fluid attracttophead">
      <div className="header-text">
      <h2 className="bigger-font ">EXPLORE CINCINNATI</h2>
      <p className="bat">Whether it’s luxury designer boutiques, concept shops or outlet malls. 
      </p>
      </div>
      </div>
      </header>

      <div className="container-fluid parent pback">
      <div className="shop-info child ">
      <h2 className="shoptextstyle text-center">Attractions</h2>
      <div >
        <img src={Attract2} alt="woman shopping" id="shop2"/>
         <p className="aqua">  Be inspired at the National Underground Freedom Center or stroll the world's known zoo. Ride the greatest wooden roller coaster ever built at Kings Island and hold on tight. Cincinnati's attractions often lure attendees before and after the convention... and provide an energizing space to hold a meeting or breakout section.</p>
       </div> 
      </div>
      </div>
      
      <div className="container-fluid pback">

      </div>
      
      <div className="bodyody">
           { this.Attractions()  }
                </div>


 
      </div>
      

);
}
}