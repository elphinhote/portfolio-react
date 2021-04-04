import React, { Component } from "react";
import "./AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <>
        <body className="container">
          <div className="jumbotron">
            <h1 className="display-4">About Me</h1>
            <hr className="my-4" />
            <img
              className="profile-pic"
              src="./images/portfolio-images/eva-wang.jpg"
              alt="Eva Wang"
            />

            <p>
            I'm a Fullstack Web Developer from Millbrae, CA. 
            I specialize in MERN and React integration for web development.
            Through my experiences, I've learned many skills toward web development. 
            This portfolio will update with recent assignments and projects.
            I've enjoyed learning more about web development and utilizing the skills 
            toward creating websites, webpages, apps.  
            To contact me, please complete the form from the contact link for me to reply.       
            </p>

            <div className="flex-row">
              <br></br>
              <div className="link-buttons">
                <a
                  className="btn"
                  href="https://1drv.ms/w/s!AoY-BRNEoSobjZpr9kgS-jdJg6S5Ig?e=s1K2Wt"
                  target="_blank"
                >
                  Resume with Updates
                </a>
                <a
                  className="btn"
                  href="https://www.linkedin.com/in/eva-wang-7158b6208/"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <a
                  className="btn"
                  href="https://github.com/elphinhote"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default AboutMe;