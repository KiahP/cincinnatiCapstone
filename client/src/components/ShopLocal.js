
import React, { Component } from 'react';
import axios from 'axios';
import "../index.css";
import Shop2 from './Images/shoppage2.jpg';


const Shop = props => (
 

  <div className="card mb-3" id="card-style">
  <div className="row g-0">
  <div className="col-md-4">
<img className="shopattractimg" src={props.shop.image}  alt=""/>
</div>
<div className="col-md-8">
<div className="card-body card-shopattract-text zooani">
   <h4 className="card-title titlestyle">{props.shop.name}</h4>
   <p className='card-text wonder'>{props.shop.description}</p>
   <p>{props.shop.address} {props.shop.city}, {props.shop.state} {props.shop.zipcode}</p>
 
 
 </div>
 </div>
 </div>
 </div>

  
)

export default class shopLocal extends Component {
  constructor(props) {  
    super(props); 
    
    
    
    this.state = {shops: []};  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/shop/')
     .then(response => {
       this.setState({shops: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  shopLocal() {
    return this.state.shops.map(currentshop => {
      return <Shop shop={currentshop} key={currentshop._id}/>;
    })
  }
  render() {
    return (
    
      



      <div>

      
      <header id="header-section-shop">
      <div className="container-fluid shoptophead">
      <div className="header-text">
      <h2 className="bigger-font ">SHOP 'TIL YOU DROP</h2>
      <p className="bat">From signature stores to high-quality shopping centers</p>
      </div>
      </div>
      </header>

      <div className="container-fluid parent ">
      <div className="shop-info child">
      <h2 className="shoptextstyle text-center">SHOPPING</h2>
      <div >
        <img src={Shop2} alt="woman shopping " id="shop2"/>
       <p className="aqua"> Whether you’re looking for bargain deals on designer clothes or antiques with a history, we’ve got the resources for you to shop ‘til you drop. Head out for the day and explore locally-owned boutiques, outlet stores, shopping malls – and even some fun foodie finds at local markets and shops. You won’t go home empty-handed!</p>
      </div>
     </div>
 
      </div>

      <div className="container-fluid pback">

      </div>

      <div className="bodyody">
           { this.shopLocal()  }
                </div>
     

      </div>
     
      


    );
  }
}
