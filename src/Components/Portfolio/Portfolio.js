import React from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";

const Portfolio = () => {
  return (
    <>
      <div className="row text-center mx-auto">
        <div className="col-12 mt-5">
          <h3>Portfolio</h3>
          <hr className="underline mt-5"></hr>
        </div>
      </div>
      <div className="card-deck mt-5">
        <CardPortfolio
          href={"http://jeremybertin.at/"}
          src="http://jeremybertin.at/images/mytube.png"
          cardTitle="Project"
          cardText="I've made this project with ..."
        />
        <CardPortfolio
          href={"http://jeremybertin.at/"}
          src="http://jeremybertin.at/images/mytube.png"
          cardTitle="Project"
          cardText="I've made this project with ..."
        />
        <CardPortfolio
          href={"http://jeremybertin.at/"}
          src="http://jeremybertin.at/images/mytube.png"
          cardTitle="Project"
          cardText="I've made this project with ..."
        />
        <CardPortfolio
          href={"http://jeremybertin.at/"}
          src="http://jeremybertin.at/images/mytube.png"
          cardTitle="Project"
          cardText="I've made this project with ..."
        />
        <CardPortfolio
          href={"http://jeremybertin.at/"}
          src="http://jeremybertin.at/images/mytube.png"
          cardTitle="Project"
          cardText="I've made this project with ..."
        />
        <CardPortfolio
          href={"http://jeremybertin.at/"}
          src="http://jeremybertin.at/images/mytube.png"
          cardTitle="Project"
          cardText="I've made this project with ..."
        />
      </div>
    </>
  );
};

export default Portfolio;
