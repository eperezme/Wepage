
import React from "react";
import { AiFillBoxPlot } from "react-icons/ai";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { MdSyncProblem } from "react-icons/md";
import { SiTensorflow } from "react-icons/si";
import { FaDocker, FaJava, FaPython, FaRProject, FaHtml5  } from "react-icons/fa";


import "./card.css";

function SkillCard2() {
  return (
    <div class="flex-container">
   <div class="flex-items">
      <FaPython size={32} style={{}}/>
      <FaRProject size={32}/>
      <FaHtml5 size={32}/>
   </div>
   <div class="flex-items mr-5">
      <p className="f2-mktg color-fg-muted">Python</p>
      <p className="f2-mktg color-fg-muted">R</p>
      <p className="f2-mktg color-fg-muted">HTML</p>
   </div>
   <div class="flex-items">
      <FaDocker size={32}/>
      <FaJava size={32}/>
      <FaDatabase size={32}/>
   </div>
   <div class="flex-items">
      <p className="f2-mktg color-fg-muted">Docker</p>
      <p className="f2-mktg color-fg-muted">Java</p>
      <p className="f2-mktg color-fg-muted">SQL </p>
   </div>
</div>
  );
}

export default SkillCard2;
