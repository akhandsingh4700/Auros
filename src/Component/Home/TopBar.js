import React from 'react';
import "./movie.css";

import{Link} from "react-router-dom"
import {connect} from 'react-redux';




const TopBar = (props) => {
 let{cart} =props
 

    return ( 
<div>
  <div className="uper-nav"></div>
<nav className="navbar navbar-expand-lg " >
  
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="https://apollotran.com/demo/at_auros/img/at-auros-logo-1557240632.jpg"/></a>
    
    <div className="collapse navbar-collapse " id="navbarNav" className="menu-items">
      <ul className="navbar-nav " >
        <li className="nav-item ">
        <Link  to="/"><a className="nav-link active" aria-current="page" >Home</a></Link>
        </li>
        <li className="nav-item ">
          <Link to="shop"><a className="nav-link" >Shop</a></Link>
        </li>
        <li className="nav-item ">
        <Link to="contact"><a className="nav-link" >Contact</a></Link>
        </li>
        <li className="nav-item cart ">
        <i className="fas fa-shopping-cart">{cart.length}</i>
        </li>
      </ul>
    </div>
  </div>

</nav>
</div>
  )
}

const mapStateToProps = store => ({
  cart: store?.cart,
 
})
 
export default connect(mapStateToProps, null)(TopBar);