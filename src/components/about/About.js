import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import "./about.css"
import Img from "../../images/img1.svg";
import emoji from "react-easy-emoji";


function About() {
    return (
        <div id="about">
            <div className="greet-main" id="greeting">
            <div className="greeting-main">
            <div className="greeting-text-div">
                <div>
                    <h1 className="heading">Hi all, I'm Akshansh  <span className="wave-emoji">{emoji("👋")}</span></h1>
                    <p className="greeting-text-p">
                        A passionate Full Stack Developer 🚀 having an<br/> 
                        experience of designing and building web and mobile <br/> 
                        application with Javascript/ Reactjs/ Nodejs and some<br/> 
                        other cool libraries and frameworks.<br/> 
                    </p>
                    <div className="button-greeting-div">
                    <Button href="#contact"  variant="primary" className="contact">Contact</Button>{' '}
                    <Button href="" variant="primary" className="contact">See My Resume</Button>
                    </div>
            </div>
            </div>
            
        
        
             <div className="greeting-image-div">
          <img src={Img} className="img1" alt="codding"  height="800px" width="800px" />
             </div>
             </div>
</div>
          </div>

           
        
    );
}

export default About
 
