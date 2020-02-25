import React from "react";

const CardPortfolio = ({ href, src, cardTitle, cardText }) => {
  return (
    <div className="col-4">
      <div className="card border-0 shadow mb-5">
        <a href={href} target="_blank">
          <img src={src} className="card-img-top" alt="..." />
        </a>
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cardText}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPortfolio;
