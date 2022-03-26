import "./home.scss"

import welcome from "../assets/images/welcome.jpg"



import React, { Component } from 'react';
import { WHITE_SPACE_CODE } from "react-animated-text-content";
  
class Home extends Component {
  render() {
    const myStyle={
        backgroundImage: `url(${welcome})`,
        height:'60vh',
        marginTop:'-90px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color:"white",
      
          };
    return (
      
      <div style={myStyle} id="home">
        <div>
        <h1 className="text1"> WELCOME TO MY PAGE! </h1>
        </div>

       
      </div>
    );
  }
}
   
export default Home;



