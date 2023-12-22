
import React from "react";
import { FaDocker, FaJava, FaPython, FaRProject, FaDatabase } from "react-icons/fa";
import { SiLatex } from "react-icons/si";


import "./card.css";

function SkillCard2() {
  return (
    <div class="flex-container">
   <div class="flex-items">
      <FaPython size={32}/>
      <FaRProject size={32}/>
      <SiLatex size={32}/>
      </div>
   <div class="flex-items mr-lg-5">
      <p className="f2-mktg color-fg-muted">Python</p>
      <p className="f2-mktg color-fg-muted">R</p>
      <p className="f2-mktg color-fg-muted">LaTeX</p>
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
