import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { LinearProgress, Typography, Box } from "@mui/material";
import "./styles.css";
import { color } from "framer-motion";

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
        <Col lg={6} className="pt-5">
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
            <p>Hello</p>
            <div class="cover">
              <Typography variant="h6">
                &lt;&gt;About Me&lt;/&gt;{" "}
                {/* This renders as <p>About Me</p> */}
              </Typography>
              {/* <p>
                <br />
                Kindly hover
              </p> */}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
