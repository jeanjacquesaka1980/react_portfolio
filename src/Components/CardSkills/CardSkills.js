import React from "react";

// import icons
import { IconContext } from "react-icons";
import { FaHammer } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

const CardSkills = () => {
  return (
    <IconContext.Provider value={{ color: "#4285F4" }}>
      <div className="col-4">
        <div className="card border-0 shadow">
          <FaHammer className="icon mx-auto mt-3" />
          <div className="card-body">
            <h5 className="card-title">Skills</h5>
            <FaHtml5 className="icon-skills my-2" />
            <div className="progress" style={{ height: "5px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%", backgroundColor: "#4285F4" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <FaHtml5 className="icon-skills my-2" />
            <div className="progress" style={{ height: "5px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "70%", backgroundColor: "#4285F4" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <FaHtml5 className="icon-skills my-2" />
            <div className="progress" style={{ height: "5px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "25%", backgroundColor: "#4285F4" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default CardSkills;
