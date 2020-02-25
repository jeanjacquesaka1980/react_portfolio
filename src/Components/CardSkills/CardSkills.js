import React from "react";

// import icons
import { IconContext } from "react-icons";
import { FaHammer, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const CardSkills = () => {
  return (
    <IconContext.Provider value={{ color: "#4285F4" }}>
      <div className="col-4">
        <div className="card border-0 shadow">
          <FaHammer className="icon mx-auto mt-3" />
          <div className="card-body">
            <h5 className="card-title">Skills</h5>
            <p className="card-text my-2">
              <FaHtml5 className="icon-skills mr-2" />
              HTML
            </p>
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
            <p className="card-text my-2">
              <FaCss3Alt className="icon-skills mr-2" />
              CSS
            </p>
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
            <p className="card-text my-2">
              <IoLogoJavascript className="icon-skills mr-2" />
              JavaScript
            </p>
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
