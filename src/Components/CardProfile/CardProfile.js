import React from "react";

// import icons
import { IconContext } from "react-icons";
import { IoMdPerson } from "react-icons/io";

const CardProfile = () => {
  return (
    <div className="col-4">
      <div className="card border-0 shadow">
        <IoMdPerson className="icon mx-auto mt-3" />
        <div className="card-body">
          <h5 className="card-title">Profile</h5>
          <ul id="card-profile" className="list-group">
            <li className="list-group-item border-0">Team Player</li>
            <li className="list-group-item border-0">Solution Oriented</li>
            <li className="list-group-item border-0">Motivated by the Results</li>
            <li className="list-group-item border-0">Patient</li>
            <li className="list-group-item border-0">Eager to Learn</li>
            <li className="list-group-item border-0">Creative</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
