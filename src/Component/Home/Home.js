import React, { Component } from "react";
import TopBar from "./TopBar";
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import "./movie.css";
import Shop from "./Card"
import contacts from "./Contact"
import ProductDetails from "./productDetail";



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

     
      
    }
    
  }
 


  render() {

  
    
    return (
      <BrowserRouter>
      <div>
    
        
     
        <Switch>
          <Route path="/" exact component={Body} />
           <Route path="/shop" component={Shop}/>
           <Route path="/contact" component={contacts}/>
           <Route path="/productDetails" component={ProductDetails}/>
        </Switch>

      
      </div>

      
      </BrowserRouter>


    );
  }

}

export default Home;


const Body = () => {
  return (
    <div>
   <TopBar />

   <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://apollotran.com/demo/at_auros/themes/at_auros/assets/img/modules/leoslideshow/h1-slide1.jpg" alt="First slide"/>
     <div className="banner-content">

     <h1 className="banner-title">ETNA</h1>
     <p>FROM <span className="banner-price">$650</span></p>
     <button className="banner-button">Shop Now</button>
     </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://apollotran.com/demo/at_auros/themes/at_auros/assets/img/modules/leoslideshow/h1-slide2.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://apollotran.com/demo/at_auros/themes/at_auros/assets/img/modules/leoslideshow/h1-slide3.jpg" alt="Third slide"/>
    </div>
  </div>
</div>

<div className="main-product-wrapper">
       <div className="main-product-container">
        <img src="https://apollotran.com/demo/at_auros/themes/at_auros/assets/img/modules/appagebuilder/icon/h1-bn-1.jpg"/>
       </div>
       <div className="main-product-container">
       <img src="https://apollotran.com/demo/at_auros/themes/at_auros/assets/img/modules/appagebuilder/icon/h1-bn-2.jpg"/>
       </div>

     </div>



      <div className="support-section">
        <div className="container">
          <div className="support-top-wrapper">
            <div className="support-top-left">
              <div className="support-top-details-text">Ways to support</div>
              <h2 className="support-top-heading">Support Acme Outdoors.</h2>
            </div>
            <div className="support-top-right">
              <p>
                COVID-19 has forced us to close our retail space, but we need
                support from patrons like yourself now more than ever. Below,
                we’ve listed the best ways to help us through this season.
              </p>
            </div>
          </div>
          <div className="support-wrapper">
          
          
          <div className="support-column">
            <div className="support-square">
              <div className="support-square-number">01</div>
              <div className="support-square-text">
                SHOP
                <br />
                PRODUCTS
              </div>
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57a5836db2a07bab0e3_Circle.svg"
                alt="Circle Decoration in Shop Products Block"
                className="support-square-image"
              />
            </div>
            <p>
              Our full product line is still available online here on our site!
              Getting outside and hiking is still something you can do. Get your
              gear now!
            </p>
            </div> 

            <div className="support-column">
            <div className="support-square">
              <div className="support-square-number">02</div>
              <div className="support-square-text">
                BUY GIFTS CARDS
               
              </div>
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57afea9a31a44d66db0_Rectangle.svg"
                alt="Rectangle Decoration in Shop Products Block"
                className="support-square-image rectangle"
              />
            </div>
            <p>
            Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family.
            </p>
            </div> 
            

            <div className="support-column">
            <div className="support-square">
              <div className="support-square-number">03</div>
              <div className="support-square-text">
                DONATE
               
              </div>
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adc54453434efb9ee_Triangle.svg"
                alt="Triangle Decoration in Shop Products Block"
                className="support-square-image triangle"
              />
            </div>
            <p>
            Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family.
            </p>
            </div> 








          </div>
        </div>
      </div>
  
    </div>
  );
};
