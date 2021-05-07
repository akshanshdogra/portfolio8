import React from 'react'
import "./skills.css"
import img2 from "../../images/img2.svg";
import icon1 from "../../images/icon1.svg";
import icon2 from "../../images/icon2.png"
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png"
import icon5 from "../../images/icon5.png";
import icon6 from "../../images/icon6.png";
import icon7 from "../../images/icon7.png";


function skills() {
    return (
        <div className="skmain" id="skills">
            <div className="skills-maindiv">
            <div className="skills-img">
                <img src={img2} className="imgcode"   height="750px" width="750px" alt="codding" />
            </div>
            <div className="text-div">
             <h1 className="heading2">What i do</h1>
             <p className="skills-p">CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
      <div className="software-skills">
          <ul className="dev-icon">
              <li className="software-skills-inline"><img src={icon1} height="50px" width="50px" alt="html" /> <p>html-5</p></li>
              <li className="software-skills-inline"><img src={icon2} height="50px" width="50px" alt="css" /> <p>css3</p></li>
              <li className="software-skills-inline"><img src={icon3} height="50px" width="50px" alt="javascript" /><p>JavaScript</p></li>
              <li className="software-skills-inline"><img src={icon4} height="60px" width="60px" alt="nodejs" /><p>Node.js</p></li>
              <li className="software-skills-inline"><img src={icon5} height="50px" width="50px" alt="reactjs" /> <p>react.js</p></li>
              <li className="software-skills-inline"><img src={icon6} height="50px" width="50px" alt="firebase" /> <p>firebase</p></li>
              <li className="software-skills-inline"><img src={icon7} height="50px" width="50px" alt="mongodb" /> <p>mongo.db</p></li>
          </ul>
      </div>
      <div>
      <p className="pinfo">⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications</p>
      <p className="pinfo">⚡ </p>
      <p className="pinfo">⚡ Integration of third party services such as Firebase.</p>

      </div>
            </div>

            </div>
        </div>
    )
}

export default skills
