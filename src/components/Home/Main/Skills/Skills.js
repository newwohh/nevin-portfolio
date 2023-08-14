import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import imgcss from "../../../../img/./Icons/css.svg";
import imghtml from "../../../../img/./Icons/html5.png";
import imgjs from "../../../../img/./Icons/javascript.png";
import imggit from "../../../../img/./Icons/git.png";
import imggithub from "../../../../img/./Icons/github.png";
import imgnode from "../../../../img/./Icons/nodejs.png";
import imgreact from "../../../../img/./Icons/react.png";
import imgvs from "../../../../img/./Icons/visual-studio-code.png";
import imgbootstrap from "../../../../img/./Icons/bootstrap.png";
import "./Skills.css";
import React from "react";
import { ParallaxHover } from "react-parallax-hover";

export default function SkillsCard() {
  return (
    <div className="to-skills" id="to-skills">
      <div className="skills">
        <Card
          sx={{
            minWidth: 275,
            "@media (max-width:1000px)": {
              width: "250px",
              marginLeft: "-50px",
            },
          }}
          className="skills-card"
        >
          <CardContent id="skills">
            <p className="skills-head" style={{ color: "#002D62" }}>
              My Skills
            </p>
            <p className="skills-text">
              The following skills are part of my toolbox. <br /> One of the
              things I love is learning new technologies.It's amazing how huge
              technology is!
            </p>
            <div className="skills-grid">
              <ParallaxHover
                height={250}
                shadow={2}
                rotation={8}
                borderRadius={20}
              >
                <div className="skills-icons">
                  <img alt="icons" src={imgcss} className="icon-css" />
                  <p>css</p>
                </div>
              </ParallaxHover>
              <ParallaxHover
                height={250}
                shadow={2}
                rotation={8}
                borderRadius={20}
              >
                <div className="skills-icons">
                  <img alt="icons" src={imghtml} className="icon-css" />
                  <p>HTML5</p>
                </div>
              </ParallaxHover>
              <ParallaxHover
                height={250}
                shadow={2}
                rotation={8}
                borderRadius={20}
              >
                <div className="skills-icons">
                  <img alt="icons" src={imgjs} className="icon-css" />
                  <p>JavaScript</p>
                </div>
              </ParallaxHover>
              <ParallaxHover
                height={250}
                shadow={2}
                rotation={8}
                borderRadius={20}
              >
                <div className="skills-icons">
                  <img alt="icons" src={imggit} className="icon-css" />
                  <p>Git</p>
                </div>
              </ParallaxHover>
              <ParallaxHover
                height={250}
                shadow={2}
                rotation={8}
                borderRadius={20}
              >
                <div className="skills-icons">
                  <img alt="icons" src={imggithub} className="icon-css" />
                  <p>GitHub</p>
                </div>
              </ParallaxHover>
              <ParallaxHover
                height={250}
                shadow={2}
                rotation={8}
                borderRadius={20}
              >
                <div className="skills-icons">
                  <img alt="icons" src={imgnode} className="icon-css" />
                  <p>NodeJs</p>
                </div>
              </ParallaxHover>
              <ParallaxHover
                height={250}
                shadow={2}
                rotation={8}
                borderRadius={20}
              >
                <div className="skills-icons">
                  <img alt="icons" src={imgreact} className="icon-css" />
                  <p>ReactJs</p>
                </div>
              </ParallaxHover>
              <ParallaxHover
                height={250}
                shadow={2}
                rotation={8}
                borderRadius={20}
              >
                <div className="skills-icons">
                  <img alt="icons" src={imgvs} className="icon-css" />
                  <p>VS Code</p>
                </div>
              </ParallaxHover>
              <ParallaxHover
                height={250}
                shadow={2}
                rotation={8}
                borderRadius={20}
              >
                <div className="skills-icons">
                  <img alt="icons" src={imgbootstrap} className="icon-css" />
                  <p>Bootstrap</p>
                </div>
              </ParallaxHover>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
