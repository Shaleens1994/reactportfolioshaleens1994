import "./project.scss"
import pex0 from "../assets/images/pex0.jpg"
import pex1 from "../assets/images/pex1.jpg"
import pex2 from "../assets/images/pex2.jpg"
import pex3 from "../assets/images/pex3.jpg"
import pex4 from "../assets/images/pex4.jpg"
import pex5 from "../assets/images/pex5.jpg"
import pex6 from "../assets/images/pex6.jpg"



export default function Project() {

  return (
   
    <div id="project">
      
            <a href="https://shaleens1994.github.io/UTOR-CBTCMP-HOMEWORK1/" className='img2'> <img src={pex0}
                alt="Project 1"  width="700" height="300"/></a>

            
              <a href="https://github.com/Shaleens1994/UTOR-CBTCMP-HOMEWORK2" className="img2" >
                <img src={pex1} alt="project2"  width="700" height="300"/>
                <p className="portfolio"></p>
              </a>

              <a href = "https://shaleens1994.github.io/UTOR-CBTCMP-HOMEWORK4/" className="img2" ><img  src={pex2} alt="Image for Project3" width="700" height="300" />
                </a>

            
           
              <a href = "https://shaleens1994.github.io/UTOR-CBTCMP-HOMEWORK5/" className="img2" >
              <img src={pex3} alt="Project 4"  width="700" height="300"/></a>
              
                <a href = "https://github.com/Shaleens1994/UTOR-CBTCMP-HOMEWORK19-texteditor" className="img2" >
              <img src={pex4} alt="Project 4"  width="700" height="300"/></a>
            
              <a href = "https://github.com/Shaleens1994/UTOR-CBTCMP-HOMEWORK14" className="img2" > 
              <img src={pex5} alt="Project 5" width="700" height="300" /></a>
            
            
              <a href = "https://github.com/Shaleens1994/Gaggle" className="img2">
              <img src={pex6} alt="Project 6"  width="700" height="300"/></a>
           
    
    </div>
   
  );
}
