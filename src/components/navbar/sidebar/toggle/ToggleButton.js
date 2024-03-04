import React from "react";
import "../style.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

export const ToggleButton = ({ setOpen }) => {
  return (
    <button className="toggle" onClick={() => setOpen((prev) => !prev)}>
      <motion.div variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}>
        <MenuIcon />
      </motion.div>
      <motion.div variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}>
        <CloseIcon />
      </motion.div>
    </button>
  );
};
