import "./navigation.scss"
import React from "react";
import {Link} from 'react-scroll'


export default function Navigation() {
  return (
    <div className="intro">
    <div className="style">
      
    <Link  to="home" spy={true} smooth={true} href="#">HOME</Link>
    
  
    </div >
    <div className="style">
    <Link  to="aboutme" spy={true} smooth={true} href="#">ABOUT ME</Link>
    </div>
    <div className="style">
    <Link  to="project" spy={true} smooth={true} href="#">PROJECTS</Link>
    </div>
<div className="style">
<Link  to="contact" spy={true} smooth={true} href="#">CONTACT</Link>
</div>
    </div>
  );
}
