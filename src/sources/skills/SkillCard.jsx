
import React from "react";
import { AiFillBoxPlot, AiFillDatabase } from "react-icons/ai";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { MdSyncProblem } from "react-icons/md";
import { SiTensorflow } from "react-icons/si";
import { FaDocker, FaJava, FaPython, FaRProject } from "react-icons/fa";

import "./card.css";

function SkillCard() {
  return (
    <div class="flex-container">
   <div class="flex-items mt-5 mb-5">
      <AiFillBoxPlot size={32} style={{transform: "rotate(90deg)"}}/>
      <DiGoogleAnalytics size={32}/>
      <AiFillDatabase size={32}/>
   </div>
   <div class="flex-items">
      <p className="f2-mktg color-fg-muted">Data Visualization</p>
      <p className="f2-mktg color-fg-muted">Data Analytics</p>
      <p className="f2-mktg color-fg-muted">Big Data</p>
   </div>
   <div class="flex-items">
      <SiTensorflow size={32}/>
      <MdSyncProblem size={32}/>
      <MdDesignServices size={32}/>
   </div>
   <div class="flex-items">
      <p className="f2-mktg color-fg-muted">Machine Learning</p>
      <p className="f2-mktg color-fg-muted">Problem-Solving</p>
      <p className="f2-mktg color-fg-muted">Experimental Design</p>
   </div>
</div>
  );
}

export default SkillCard;
