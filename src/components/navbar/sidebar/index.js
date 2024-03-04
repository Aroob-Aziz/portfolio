import React, { useState } from "react";
import { motion } from "framer-motion";
import { Links } from "../links/Links";
import { ToggleButton } from "./toggle/ToggleButton";
import "./style.css";
import { Circle } from "@mui/icons-material";

const variants = {
  open: {
    clipPath: "Circle(1200px at 50px 50px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
  closed: {
    clipPath: "Circle(30px at 50px 40px)",
    transition: {
      delay: 0.25,
      type: "spring",
      // duration: 2,
      bounce: 0.5,
      // stiffness: 400,
      // damping: 40,
    },
  },
};

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};
