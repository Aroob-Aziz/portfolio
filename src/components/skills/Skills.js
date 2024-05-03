import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { LinearProgress, Typography, Box } from "@mui/material";
import "./skills.css";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiFlutter } from "react-icons/si";
import JavascriptIcon from "@mui/icons-material/Javascript";

const generateRandomPath = (numSteps, max) => {
  return Array.from({ length: numSteps }, () =>
    Math.floor(Math.random() * max)
  );
};

const AnimatedCircles = ({
  sectionWidth = 1536,
  sectionHeight = 900,
  imgIcon,
}) => {
  const numSteps = 5; // Number of random steps for the animation

  return (
    <motion.div
      initial={{ x: 0, y: 0 }} // Initial starting point
      animate={{
        x: generateRandomPath(numSteps, sectionWidth), // Generate random x path
        y: generateRandomPath(numSteps, sectionHeight), // Generate random y path
      }}
      transition={{
        duration: 60, // Adjusted to create smoother transitions
        repeat: Infinity, // Infinite looping
        repeatType: "mirror", // Back-and-forth pattern
        ease: "easeInOut", // Smooth transition between steps
      }}
      className="circles" // Apply proper CSS styling
    >
      {imgIcon}
    </motion.div>
  );
};

// const AnimatedCircles = () => {
//   return (
//     <motion.div
//       initial={{ x: 0, y: 0 }}
//       animate={{ x: [0, 1000, 0], y: [0, 500, 0] }} // Sequence of positions
//       transition={{
//         duration: 40, // Controls speed of movement
//         repeat: Infinity, // Infinite looping
//         ease: "linear", // Consistent movement
//       }}
//       className="circles" // Your existing CSS class
//     />
//   );
// };
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
        <AnimatedCircles
          imgIcon={
            <JavascriptIcon
              style={{
                fontSize: 60,
                color: "#f0db4f",
              }}
            />
          }
        />
        <AnimatedCircles
          imgIcon={
            <FaReact
              style={{
                fontSize: 50,
                color: "#e34c26",
              }}
            />
          }
        />
        <AnimatedCircles
          imgIcon={
            <FaHtml5
              style={{
                fontSize: 50,
                color: "#f0db4f",
              }}
            />
          }
        />
        <AnimatedCircles
          imgIcon={
            <FaNode
              style={{
                fontSize: 50,
                color: "white",
              }}
            />
          }
        />
        <AnimatedCircles
          imgIcon={
            <MdCss
              style={{
                fontSize: 50,
                color: "#3c873a",
              }}
            />
          }
        />
        <AnimatedCircles
          imgIcon={
            <FaBootstrap
              style={{
                fontSize: 50,
                color: "#61dafb",
              }}
            />
          }
        />
        <AnimatedCircles
          imgIcon={
            <RiTailwindCssFill
              style={{
                fontSize: 50,
                color: "#40c9ff",
              }}
            />
          }
        />
        <AnimatedCircles
          imgIcon={
            <SiFlutter
              style={{
                fontSize: 50,
                color: "#FE53BB",
              }}
            />
          }
        />
        <AnimatedCircles
          imgIcon={
            <SiMysql
              style={{
                fontSize: 50,
                color: "#ffdb3b",
              }}
            />
          }
        />
        <AnimatedCircles
          imgIcon={
            <FaPython
              style={{
                fontSize: 50,
                color: "#2BDEAC",
              }}
            />
          }
        />
        <AnimatedCircles
          imgIcon={
            <TbBrandReactNative
              style={{
                fontSize: 50,
                color: "red",
              }}
            />
          }
        />
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
