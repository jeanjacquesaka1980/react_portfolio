import React from "react";

// import icons
import { IconContext } from "react-icons";
import { MdPermContactCalendar } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const CardLinks = () => {
  return (
    <div className="col-4">
      <div className="card border-0 shadow">
        <MdPermContactCalendar className="icon mx-auto mt-3" />
        <div className="card-body">
          <h5 className="card-title">Conatct</h5>
          <ul className="list-group">
            <li className="list-group-item border-0">
              <a>
                <FaGithub className="icon-skills mr-2" />
                GitHub
              </a>
            </li>
            <li className="list-group-item border-0">
              <a>
                <FaLinkedin className="icon-skills mr-2" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardLinks;
