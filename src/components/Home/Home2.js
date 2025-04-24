import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with Cyber Security and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C, Javascript, Solidity and Python. </b>
              </i>
              <br />
              <br />
              My field of interest lies in exploring and strengthening &nbsp;
              <i>
                <b className="purple">Cybersecurity Systems and Infrastructure, </b> as well as diving deep into areas such as{" "}
                <b className="purple">
                Digital Forensics and Blockchain Security.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for building secure digital environments with modern tools in the cybersecurity ecosystem like
              <b className="purple">Kali Linux, Wireshark, and Burp Suite, </b> and alongside knowledge in 
              <i>
                <b className="purple">
                  {" "}
                  SIEM tools and
                  Cloud Security Frameworks.
                </b>
              </i>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Achievements
            </h1><br></br>
            <p>
             - Ranked in <span className="purple">Top 1%  </span> percent in <span className="purple">Tryhackme </span>
            </p><br></br>
            <p>
             - Under <span className="purple">Top 10  </span> team in the <span className="purple">Smart India Hackathon</span> University level
            </p><br></br>
            <p>
             - Secured <span className="purple">2nd </span> position in <span className="purple">Critical Thinking event </span>at university.
            </p><br></br>
          </Col>
          
        </Row>


        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/3212harsh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/HarshCh88945862"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/75-harsh-choudhary"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/harshchoudhary2550"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>


        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
