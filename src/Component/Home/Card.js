import React, { useState } from "react";
import { CardData } from "./data";
import "./movie.css";
import TopBar from "./TopBar";
import Products from "./product";
import{Link} from "react-router-dom"


const Shop = () => {

function changeCount(data){
console.log(data)
}


  return (
    <div className="shop">
      <TopBar />
      <div className="product-banner">
  <img src="https://apollotran.com/demo/at_auros/themes/at_auros/assets/img/bg-beagrumb.jpg"/>

</div >
 <p>Discover our favorites fashionable discoveries, a selection of cool items to integrate in your wardrobe. Compose a unique style with personality which matches your own.</p>
<hr/>

<div className="product-wrapper"> 
      {CardData.map((item, index) => (
        <Link to ={{
          pathname:"productDetails",
          data:item}}>

        <Products data={item} key={index} changeCount={changeCount} />
       
        </Link>
      
      ))}</div>
    </div>
  );
};

export default Shop;
