import React from "react";
import "./AllPage.css";

function About() {
  return (
    <div className="section">
      <h1>About Me</h1>
      <blockquote>
        <span className="quote">
          {" "}
          “Great web design without functionality is like a sports car with no
          engine.” – Paul Cookson"
        </span>
      </blockquote>

      <h2 className="myname">
        Hi, I'am <span className="name">Aman</span> I can Turn Your Beautifull Design Into Code.I'm a Web Developer
        Having Good Level Expereice in web development and problem solving
        Skills.
      </h2>
      <div className="contactmesection">
        <h2><a href="https://www.linkedin.com/in/aman-singh-19723616a/">Linedkin</a></h2>
        <h2><a href="https://github.com/aman246149">Github</a></h2>
        <h2><a href="https://aman246149.github.io/aman-new-portfolio/index.html">PortFolio</a></h2>
        <h2><a href="mailto:amanthapliyal14@gmail.com">Mail Me</a></h2>
      </div>

    </div>
  );
}

export default About;
