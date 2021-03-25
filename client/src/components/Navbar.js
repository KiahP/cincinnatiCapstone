import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import FlyingPig from "./hoc/FlyingPig.jpg";

export default class Navbar extends Component {


  render() {
    return (
<nav className="navbar navbar-expand-lg top">
  <a href="/" className="navbar-brand"><img className="FlyingPig" src={FlyingPig} alt=""/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
  <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navBarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <Link to='/' className="nav-link">Home
        {/* <a href="/" className="nav-link">Home</a> */}
      </Link>
      <Link to='/about' className="nav-link">About
      {/* <a href="/about" className="nav-link">About</a> */}
      </Link>
      <Link to='/contact' className="nav-link">Contact
      {/* <a href="/contact" className="nav-link">Contact</a> */}
      </Link>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Things To Do
          </a>
        <div className="dropdown-menu">
        
        <Link to='/restaurant' className="dropdown-item">Eat Local
        {/* <a href="/restaurant" className="dropdown-item">Eat local</a> */}
        </Link>
        <Link to='/shop' className="dropdown-item">Shop Local
        {/* <a href="/shop" className="dropdown-item">Shop local</a> */}
        </Link>
        <Link to='/attraction' className="dropdown-item">Attractions
        {/* <a href="/attraction" className="dropdown-item">Attractions</a> */}
        </Link>
        <Link to='/history' className="dropdown-item">Cincy History
        {/* <a href="/history" className="dropdown-item">Cincy History</a> */}
        </Link>
        </div>
      </li>
    </ul>
    <form action="" className="form-inline my-2 my-lg-0">
      <input type="search" className="form-control mr-sm-2" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-dark my-2 my-sm-0">Search</button>
    </form>
  </div>
  </nav>
);
  
    }
  }

