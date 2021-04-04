import React, { Component } from "react";
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <body className="container">
        <div className="jumbotron">
          <h1 className="display-4">Portfolio</h1>
          <hr className="my-4" />

          <div className="row">
            <div className="column">
              <div className="card">
                <img
                  src="./images/portfolio-images/pubcrawl.png"
                  className="card-img-top"
                  alt="pubcrawl"
                />
                <div className="card-body text-center">
                  <p className="card-text"> PubSpace </p>
                  <a
                    className="github-link"
                    target="_blank"
                    href="https://github.com/elphinhote/PubCrawl"
                  >
                    GitHub Repo{" "}
                  </a>
                  <a
                    className="deployed-app-link"
                    target="_blank"
                    href="https://pub-space.herokuapp.com/login"
                  >
                    Deployed App{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img
                  src="./images/portfolio-images/fitnesstracker.png"
                  class="card-img-top"
                  alt="fitness tracker"
                />
                <div className="card-body text-center">
                  <p className="card-text"> Fitness Tracker </p>
                  <a
                    className="github-link"
                    target="_blank"
                    href="https://github.com/elphinhote/workout-tracker"
                  >
                    GitHub Repo{" "}
                  </a>
                  <a
                    className="deployed-app-link"
                    target="_blank"
                    href="https://mighty-fortress-74552.herokuapp.com/"
                  >
                    Deployed App{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="card">
                <img
                  src=".images/portfolio-images/eat-da-burger.jpg"
                  className="card-img-top"
                  alt="Eat-Da-Burger"
                />
                <div className="card-body text-center">
                  <p className="card-text"> Eat-Da-Burger </p>
                  <a
                    className="github-link"
                    target="_blank"
                    href="https://github.com/elphinhote/eat-da-burger"
                  >
                    GitHub Repo{" "}
                  </a>
                  <a
                    className="deployed-app-link"
                    target="_blank"
                    href="https://evening-dawn-42448.herokuapp.com/burgers"
                  >
                    Deployed App{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Portfolio;