import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const cardVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const slidingVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: ["-460%", "220%"],

    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "linear",
    },
  },
};

export const Hero = () => {
  return (
    <div className="hero">
      <Row className="h-75 g-0">
        <Col lg={5} className="d-flex p-5 flex-column align-items-center ">
          <motion.div
            className="card"
            variants={cardVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="card-info pt-5 d-flex flex-column justify-content-center align-items-center"
              variants={cardVariants}
            >
              <motion.p variants={cardVariants}>Aroob Aziz</motion.p>
              <motion.p variants={cardVariants}>Frontend Developer</motion.p>

              <motion.div class="pyramid-loader" variants={cardVariants}>
                <div class="wrapper">
                  <span class="side side1"></span>
                  <span class="side side2"></span>
                  <span class="side side3"></span>
                  <span class="side side4"></span>
                  <span class="shadow"></span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.button
            className="btn mt-5"
            type="button"
            variants={cardVariants}
            animate="animate"
            initial="initial"
          >
            <strong>CONTACT ME</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </motion.button>
        </Col>
      </Row>
      <Row className="g-0  h-25">
        <Col className="slidingDiv">
          <motion.div
            className="slidingTextContainer"
            variants={slidingVariants}
            initial="initial"
            animate="animate"
          >
            Write Content Creator Influencer
          </motion.div>
        </Col>
      </Row>

      {/* **pyramid** */}
    </div>
  );
};
