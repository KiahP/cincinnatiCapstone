import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import FlyingPig from "./hoc/FlyingPig.jpg";

export default class Navbar extends Component {


  render() {
    return (
<nav className="navbar navbar-expand-lg top">
  <Link to='/' className="navbar-brand"><img className="FlyingPig" src={FlyingPig} alt=""/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
  <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navBarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <Link to='/' className="nav-link">Home</Link>
      <Link to='/about' className="nav-link">About</Link>
      <Link to='/contact' className="nav-link">Contact</Link>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Things To Do
          </a>
        <div className="dropdown-menu">
        
        <Link to='/restaurant' className="dropdown-item">Eat Local</Link>
      
        
        <Link to='/shop' className="dropdown-item">Shop Local</Link>
       
        
        <Link to='/attraction' className="dropdown-item">Attractions</Link>
        
        
        <Link to='/history' className="dropdown-item">Cincy History</Link>
        
        
        </div>
      </li>
    </ul>
    <form action="" className="form-inline my-2 my-lg-0">
      <button className="btn btn-outline-light my-2 my-sm-0">Login</button>
    </form>
  </div>
  </nav>
);
  
    }
  }