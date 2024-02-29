import React from "react";
import "./style.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, Row, Col } from "react-bootstrap";
import CopyrightIcon from "@mui/icons-material/Copyright";

export const Navbar = () => {
  return (
    <Container className="container">
      <Row>
        <Col className=" gx-5 gy-3 d-flex flex-row justify-content-between">
          <a href="#" className="d-flex my-link">
            <CopyrightIcon className="me-1 rotate-on-hover" />
            <span className="name">Aroob Aziz</span>
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
