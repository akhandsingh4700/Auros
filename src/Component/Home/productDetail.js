import React from "react";
import TopBar from "./TopBar";
import {connect} from 'react-redux';
import {addProduct} from "../../action";


const ProductDetails = (props) => {
    console.log("product details",props)
  
    

  if (props.location.data) {
    //   setDataloaded(true)
  } else {
      window.location.replace('/')
  }

  return (
      <div>
        {/* <img src={props?.location?.data?.image} style={{ height: 200, width: 400 }} />
        <text>{props?.location?.data?.description}</text> */}
        <TopBar />

        <div className="card mb-3 details-card" style={{maxWidth:"540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props?.location?.data?.image} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props?.location?.data?.productName}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        <button onClick={() => console.log(props?.location?.data)}>Add To Cart</button> 
      </div>
    </div>
  </div>
</div>
        
      </div>
    );
};

 export default ProductDetails;
// const mapDispatchToProps = (dispatch) => ({
//   addToCart: (data) => dispatch(addProduct(data)),
 
// })

// export default connect(null, mapDispatchToProps)(ProductDetails)








// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// const ProductDetails = (props) => {
//   console.log("product details props >>>>", props.location);

//   const [isLoading, setLoading] = useState(true);

//   const { image, description, id } = props.location.data;

//   useEffect(() => {
//     API(id).then((rep) => {
//       if (Response.status === 200) {
//         setLoading(false);
//       } else {
//         setLoading(false);

//          if (answer) {
//           //some code
//         } else {
//           //some code
//         }
//       }
//     });
//   }, []);

//   if (isLoading) {
//     loader;
//   } else
//     return (
//       <div>
//         <img src={image} style={{ height: 200, width: 400 }} />
//         <text>{description}</text>
//       </div>
//     );
// };

// export default ProductDetails;