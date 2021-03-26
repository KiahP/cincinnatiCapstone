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
span
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
<li className="nav-item dropdown">
<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
Things To Do</a>
<div className="dropdown-menu">
   <Link to='/restaurant' className="dropdown-item">Eat Local</Link>
      
        
        <Link to='/shop' className="dropdown-item">Shop Local</Link>
       
        
        <Link to='/attraction' className="dropdown-item">Attractions</Link>
        
        <Link to='/history' className="dropdown-item">Cincy History</Link>
        
        
        </div>
      </li>

</ul>
</div>
</nav>
  
);
  
    }
  }