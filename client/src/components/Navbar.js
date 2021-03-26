import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import FlyingPig from "./hoc/FlyingPig.jpg";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

export default class Navbar extends Component {


  render() {
    return (
<nav className="navbar navbar-expand-lg top">
<Link to='/' className="navbar-brand"><img className="FlyingPig" src={FlyingPig} alt=""/></Link>

<button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navBarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded='false' aria-label='Toggle navigation'>

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
<Link to='/contact' className="nav-link">Contact</Link>
</li>
<li>
<Link to='/restaurant' className="nav-link">Eat Local</Link>
</li>     
<li>    
<Link to='/shop' className="nav-link">Shop Local</Link>
</li>       
<li>       
<Link to='/attraction' className="nav-link">Attractions</Link>
</li>
<li>        
<Link to='/history' className="nav-link">Cincy History</Link>
</li>        
        
     

</ul>
</div>
</nav>
  
);
  
    }
  }