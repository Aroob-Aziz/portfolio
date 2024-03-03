import React from "react";
import "./style.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, Row, Col } from "react-bootstrap";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { motion } from "framer-motion";
import { Sidebar } from "./sidebar";

export const Navbar = () => {
  return (
    <Container className="container">
      <Row>
        <Col lg={1} className="gx-0">
          <Sidebar />
        </Col>
        <Col
          lg={11}
          className="gx-5 gy-4 d-flex flex-row justify-content-between"
        >
          <a href="#" className="d-flex my-link">
            <CopyrightIcon className="me-1 rotate-on-hover" />
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1, x: 2 }}
              transition={{ duration: 0.5 }}
              className="name"
            >
              Aroob Aziz
            </motion.span>
            <span className="code">Code by Aroob Aziz</span>
          </a>
          <div className="social d-flex justify-content-around ">
            <a href="https://www.facebook.com/profile.php?id=100009734500178">
              <FacebookRoundedIcon />
            </a>
            <a href="https://www.linkedin.com/in/aroob-aziz/">
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/aroob_memon/">
              <InstagramIcon />
            </a>
            <a href="https://twitter.com/AzizAroob">
              <TwitterIcon />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
