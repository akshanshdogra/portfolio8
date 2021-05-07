import React from 'react';
import "./contact.css";
import github from "../../images/github.png";
import gmail from "../../images/gmail.png";
import insta from "../../images/insta.png";
import contact from "../../images/contact.svg";

 

function Contact() {
    return (
        <div id="contact">
            <div className="contact-div-main">
                <div className="contact-header">
                    <h1 className="heading-contact-title">Contact Me <span className="telephone">☎️</span></h1>
                    <p className="contact-subtitle">DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
                    <div className="contact-text-div">
                        <a className="contact-detail" >9971221026</a>
                        <br />
                        <a className="contact-email" href="mailto:akshanshdogra@gmail.com">akshanshdogra@gmail.com</a>
                        <div className="social-media">
                        <a href="https://github.com/Akshansh07" className="icon-button-github">
                            <img src={github} height="45px" width="45px" alt="github" />
                        </a>
                        <a href="mailto:akshanshdogra@gmail.com" className="icon-button-github">
                            <img src={gmail} height="45px" width="45px" alt="gmail" />
                        </a>
                        <a href="https://www.instagram.com/akshansh_bains07/" className="icon-button-github">
                            <img src={insta} height="38px" width="38px" alt="intagram" />
                        </a>

                        </div>
                    </div>
                </div>
                <div className="contact-image">
                    <div className="imgcontact">
                        <img src={contact} className="message" height="800px" width="800px" alt="Contactme"  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
