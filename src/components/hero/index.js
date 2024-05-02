import React from "react";
import "./style.css";
import { Row, Col, Container } from "react-bootstrap";
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
    x: "0%",
  },
  animate: {
    x: ["250%", "-520%"],
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 8,
      ease: "linear",
    },
  },
};

const slideVariants = {
  initial: {
    x: "0",
  },
  animate: {
    x: ["250%", "-480%"],

    transition: {
      delay: 14,
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 8,
      ease: "linear",
    },
  },
};

export const Hero = () => {
  return (
    <Container className="hero">
      <Row className="h-75 g-0">
        <Col
          lg={7}
          className=" ps-5 pt-5 d-flex flex-column  align-items-center"
        >
          <motion.div
            className="pt-5"
            variants={cardVariants}
            initial="initial"
            animate="animate"
          >
            <div className="d-flex flex-row ">
              <button className="button" data-text="Awesome">
                <span className="actual-text">
                  &nbsp;I develop things for the web&nbsp;
                </span>
                <span aria-hidden="true" className="hover-text">
                  I develop things for the web
                </span>
              </button>
              <div className="loading ms-3">
                <svg width="64px" height="48px">
                  <polyline
                    points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                    id="back"
                  ></polyline>
                  <polyline
                    points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                    id="front"
                  ></polyline>
                </svg>
              </div>
            </div>

            <p className="mt-4 ms-2">
              As a software engineer specializing in web development, I create
              user-friendly solutions.
              <br />
              Dedicated to bringing ideas to life online, I'm skilled in
              crafting the digital experience.
            </p>
            <motion.button
              className="btn mt-5 ms-2"
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
          </motion.div>
        </Col>
        <Col lg={5} className="d-flex ps-5 pt-5 flex-column  ">
          <motion.div
            className="ms-5 card"
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
        </Col>
      </Row>
      <Row className="g-0  h-25">
        <Col className=" slidingDiv">
          <motion.div
            className="slidingTextContainer"
            variants={slidingVariants}
            initial="initial"
            animate="animate"
          >
            Passionate Frontend Web Developer
          </motion.div>
          <motion.div
            className="slidingTextContainer"
            variants={slideVariants}
            initial="initial"
            animate="animate"
          >
            Industrious Software Developer
          </motion.div>
        </Col>
      </Row>

      {/* **pyramid** */}
    </Container>
  );
};
