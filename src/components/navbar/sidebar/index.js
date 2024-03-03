import React, { useState } from "react";
import { motion } from "framer-motion";
import { Links } from "../links/Links";
import { ToggleButton } from "./toggle/ToggleButton";
import "./style.css";
import { Circle } from "@mui/icons-material";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "Circle(1200px at 50px 50px)",
      transition: "spring",
      stiffness: 400,
      damping: 40,
    },
    closed: {
      clipPath: "Circle(30px at 50px 40px)",
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};
