import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";

export const Hero = () => {
  return (
    <div className="hero">
      <Row className="h-100 g-0">
        <Col lg={5} className="d-flex p-5 flex-row justify-content-center ">
          <div className="card">
            <div className="card-info pt-5 d-flex flex-column justify-content-center align-items-center">
              <p>Aroob Aziz</p>
              <p>Frontend Developer</p>
              <div class="pyramid-loader">
                <div class="wrapper">
                  <span class="side side1"></span>
                  <span class="side side2"></span>
                  <span class="side side3"></span>
                  <span class="side side4"></span>
                  <span class="shadow"></span>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* **pyramid** */}
    </div>
  );
};
