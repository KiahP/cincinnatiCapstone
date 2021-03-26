import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import FlyingPig from "./hoc/FlyingPig.jpg";
export default class Navbar extends Component {


  render() {
    return (
<nav className="navbar navbar-expand-lg top">
<Link to='/' className="navbar-brand"><img className="FlyingPig" src={FlyingPig} alt=""/></Link>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded='false' aria-label='Toggle navigation'>

<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navBarSupportedContent">
<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
<li>
<Link to='/' className="nav-link">Home</Link>
</li>
<li>
<Link to='/about' className="nav-link">About</Link>
</li>
<li>
<Link to='/contact' className="nav-link">Contact</Link></li>

<Link to='/restaurant' className="nav-link">Eat Local</Link>
      
        
<Link to='/shop' className="nav-link">Shop Local</Link>
       
        
<Link to='/attraction' className="nav-link">Attractions</Link>
        
<Link to='/history' className="nav-link">Cincy History</Link>
        
        
       

</ul>
</div>
</nav>
  
);
  
    }
  }