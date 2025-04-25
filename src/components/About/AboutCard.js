import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harsh Choudhary </span>
            from <span className="purple">Kangra, India.</span>
            <br />
            I am currently pursuing my studies in the field of Cybersecurity.
            <br />
            I have a strong passion for ethical hacking, threat analysis, and building secure digital systems.
            <br />
            <br />
            Apart from cybersecurity, here are a few things I love doing!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing strategy and puzzle games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing cybersecurity blogs and walkthroughs
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies and tools
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Securing systems isn't just a job—it's a responsibility to make the digital world safer for everyone."
          </p>
          <footer className="blockquote-footer">Rahul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
