import {  createStore } from "redux";
import { productReducer } from "../reducers";



const ConfigureStore = () => {

  
    const store = createStore(productReducer)
    return ( store );
}
 
export default ConfigureStore;