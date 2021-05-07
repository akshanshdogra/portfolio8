import React from 'react'
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Skills from "./skills/Skills";
import Bar from "./skillsbar/Bar";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

function Main() {
    return (
        <div>
            <Navbar />
            <About />
            <Skills />
            <Bar />
            <Contact />
            <Footer />
        </div>
    )
}

export default Main;
