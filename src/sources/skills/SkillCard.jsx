
import React from "react";
import { AiFillBoxPlot } from "react-icons/ai";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { MdSyncProblem } from "react-icons/md";
import { SiTensorflow } from "react-icons/si";
import { FaDocker, FaJava, FaPython, FaRProject } from "react-icons/fa";

import "./card.css";

function SkillCard() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center content-normal">
      {/* column 1 */}
      {/* Column 2 */}
      <div className="lang">
        <div className="col">
          <div className="frame">
            <FaPython className="react-icons-fa" color="white" />
            <FaRProject className="react-icons-fa" />
          </div>
          <div className="frame">
            <div className="text-wrapper">Python</div>
            <div className="text-wrapper">R language</div>
          </div>
        </div>
        <div className="col-2">
          <div className="frame">
            <FaDocker className="react-icons-fa" color="white" />
            <FaJava className="react-icons-fa" />
          </div>
          <div className="frame">
            <div className="text-wrapper">Docker</div>
            <div className="text-wrapper">Java</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
