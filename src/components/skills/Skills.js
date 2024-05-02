import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { LinearProgress, Typography, Box } from "@mui/material";
import "./skills.css";

const SkillBar = ({ skill, proficiency, color }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="body1">{skill}</Typography>
    <LinearProgress
      variant="determinate"
      value={proficiency}
      sx={{
        height: 10, // Adjust height
        borderRadius: 5, // Adjust rounded corners
        backgroundColor: "#ddd", // Background color for unfilled portion
        "& .MuiLinearProgress-bar": {
          backgroundColor: color, // Color of the filled portion
        },
      }}
    />
  </Box>
);

export const Skills = () => {
  const skills = [
    { skill: "JavaScript", proficiency: 90, color: "#f0db4f" }, // Yellow for JS
    { skill: "Python", proficiency: 85, color: "#306998" }, // Blue for Python
    { skill: "HTML", proficiency: 80, color: "#3c873a" }, // Red for HTML
    { skill: "CSS", proficiency: 75, color: "#264de4" }, // Blue for CSS
    { skill: "Flutter", proficiency: 70, color: "#42a5f5" },
    { skill: "React", proficiency: 85, color: "#61dafb" },
    { skill: "React Native", proficiency: 70, color: "#e34c26" },
    { skill: "Node.js", proficiency: 80, color: "#3c873a" }, // Green for Node.js
    { skill: "SQL", proficiency: 75, color: "#f29111" },
  ];

  return (
    <Container className="styledContainer">
      <Row>
        <Col lg={6} className="pt-5 ps-5">
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
