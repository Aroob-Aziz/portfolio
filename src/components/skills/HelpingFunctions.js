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
import { LinearProgress, Typography, Box } from "@mui/material";

export const SkillBar = ({ skill, proficiency, color }) => (
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

const generateRandomPath = (numSteps, max) => {
  return Array.from({ length: numSteps }, () =>
    Math.floor(Math.random() * max)
  );
};

export const AnimatedCircles = ({
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

export const skills = [
  { skill: "JavaScript", proficiency: 90, color: "#f0db4f" },
  { skill: "Python", proficiency: 85, color: "#306998" },
  { skill: "HTML", proficiency: 80, color: "#3c873a" },
  { skill: "CSS", proficiency: 75, color: "#264de4" },
  { skill: "Flutter", proficiency: 70, color: "#42a5f5" },
  { skill: "React", proficiency: 85, color: "#61dafb" },
  { skill: "React Native", proficiency: 70, color: "#e34c26" },
  { skill: "Node.js", proficiency: 80, color: "#3c873a" },
  { skill: "SQL", proficiency: 75, color: "#f29111" },
];

export const iconsData = [
  { component: JavascriptIcon, size: 60, color: "#f0db4f" },
  { component: FaReact, size: 50, color: "#e34c26" },
  { component: FaHtml5, size: 50, color: "#f0db4f" },
  { component: FaNode, size: 50, color: "white" },
  { component: MdCss, size: 50, color: "#3c873a" },
  { component: FaBootstrap, size: 50, color: "#61dafb" },
  { component: RiTailwindCssFill, size: 50, color: "#40c9ff" },
  { component: SiFlutter, size: 50, color: "#FE53BB" },
  { component: SiMysql, size: 50, color: "#ffdb3b" },
  { component: FaPython, size: 50, color: "#2BDEAC" },
  { component: TbBrandReactNative, size: 50, color: "red" },
];
