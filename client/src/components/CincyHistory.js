import React, { Component } from 'react';
import axios from 'axios';
import tour from './Images/historytour.jpg';

const History = props => (
  <div className="card mb-3 card-style">
  <div className="row g-0">
  <div className="col-md-4">
<img className="shopattractimg" src={props.history.image}  alt=""/>
</div>
<div className="col-md-8">
<div className="card-body card-shopattract-text zooani">
   <h4 className="card-title titlestyle">{props.history.name}</h4>
   <h5 className='card-text wonder'>{props.history.description}</h5>
   <p>{props.history.address} {props.history.city}, {props.history.state} {props.history.zipcode}</p>
 
 
 </div>
 </div>
 </div>
 </div>
)

export default class CincyHistory extends Component {
  constructor(props) {  
    super(props); 
    
    
    
    this.state = {histories: []};  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/history/')
     .then(response => {
       this.setState({ histories: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  cincyHistory() {
    return this.state.histories.map(currenthistory => {
      return <History history={currenthistory} key={currenthistory._id}/>;
    })
  }
  render() {
    return (
        
<div className="margin">
<header id="header-section-shop">
      <div className="container-fluid historyTopHead">
      <div className="header-text">
      <h2 className="bigger-font ">Find History & Culture in Cincinnati</h2>
      <p className="bat"> Enjoy the Cincinnati region's national museums and acclaimed attractions.</p>
      </div>
      </div>
      </header>

      <div className="container-fluid parent peback">
      <div className="shop-info child ">
      <h2 className="shoptextstyle text-center">HISTORY</h2>
      <div >
        <img src={tour} alt="woman shopping" id="cincyhistory"/>
       <p className="aqua">The Cincinnati and Northern Kentucky region is steeped in a rich history and legacy. Experience our German heritage, marvel at the Art Deco architecture throughout the area, and delve below city streets to relive the history of our unique river region. Take a guided tour or explore on your own and learn about Cincinnati’s brewing heritage, the region’s strong role in baseball history, or taste samples from popular restaurants in revitalized neighborhoods. </p>
      </div>
      </div>
      </div>
{ this.cincyHistory() }

</div>
      


    );
  }
}