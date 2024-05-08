import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Typography } from "@mui/material";
import "./skills.css";
import {
  SkillBar,
  AnimatedCircles,
  skills,
  iconsData,
} from "./HelpingFunctions";

export const Skills = () => {
  return (
    <Container className="styledContainer">
      <Row>
        {iconsData.map((icon, index) => {
          const IconComponent = icon.component;
          return (
            <AnimatedCircles
              key={index}
              imgIcon={
                <IconComponent
                  style={{
                    fontSize: icon.size,
                    color: icon.color,
                  }}
                />
              }
            />
          );
        })}
        <Col lg={6} className="pt-5 ps-5">
          {/* <div className="circles"></div> */}
          <div className="progressBars">
            <div class="loader"></div>
            {/* <Typography variant="h4" gutterBottom>
              Skills
            </Typography> */}
            {skills.map(({ skill, proficiency, color }) => (
              <SkillBar
                key={skill}
                skill={skill}
                proficiency={proficiency}
                color={color}
              />
            ))}
          </div>
        </Col>
        <Col lg={6}>
          <div class="book">
            <p className="ms-5">
              I'm a software engineer specializing in frontend development, with
              a keen eye for creating responsive and user-friendly web
              interfaces. My expertise includes JavaScript frameworks like
              React, and I thrive in environments where innovative UI/UX
              solutions are valued.
            </p>
            <div class="cover d-flex flex-column">
              <div class="spinner">
                <div class="spinner1"></div>
              </div>
              <Typography
                variant="h6"
                className="mt-3"
                style={{ color: "white" }}
              >
                &lt;&gt;About Me&lt;/&gt; <br />
                <p className="ms-4" style={{ fontSize: "14px" }}>
                  Kindly hover..
                </p>
              </Typography>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
