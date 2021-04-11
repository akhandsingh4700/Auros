
import React, { Component } from 'react';
import Home from "./Component/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div>
      <Home/>
    

    </div> );
  }
}
 
export default App;
