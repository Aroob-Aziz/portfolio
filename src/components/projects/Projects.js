import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";

const AnimatedCards = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <Container className="styledContainer2">
      <Row className="h-100">
        <Col className="d-flex flex-column justify-content-center ">
          <motion.svg
            id="progress"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            style={{
              position: "relative",
              top: "4%",
              left: "5%",
              marginBottom: "4%",
              transform: "rotate(-90deg)",
            }}
          >
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg2" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollXProgress }}
            />
          </motion.svg>

          <ul ref={ref} className="scrollable-list">
            {[...Array(6)].map((_, index) => (
              <li key={index} className="card2"></li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default AnimatedCards;
