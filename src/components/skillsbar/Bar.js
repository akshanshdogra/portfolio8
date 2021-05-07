import React from 'react';
import "./bar.css";
import img3 from "../../images/img3.svg";

function Bar() {
    return (
        <div id="opensource">
        <div className="skill-bar-container">
            <div className="skill-bar">
            <h1 className="heading3">Proficiency</h1>
            <div className="skill">
                <p>Frontend / Design</p>
                <div className="meter">
                    <span style={{width: "95%"}} ></span>
                </div>
            </div>
            <div className="skill">
                <p>Backend</p>
                <div className="meter">
                    <span style={{width: "70%"}} ></span>
                </div>
            </div>
            <div className="skill">
                <p>Programming</p>
                <div className="meter">
                    <span style={{width: "60%"}} ></span>
                </div>
            </div>

            </div>
            <div className="skills-image">
                <img src={img3} className="img3" height="750px" width="750px" alt="webdeveloper" />
            </div>
        </div>
            
        </div>
    )
}

export default Bar
