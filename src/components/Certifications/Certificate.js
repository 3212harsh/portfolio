import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/security.jpeg";
import emotion from "../../Assets/sc.png";
import editor from "../../Assets/Projects/ea.jpeg";
import chatify from "../../Assets/Projects/sp.jpeg";
import suicide from "../../Assets/fr.jpeg";
import bitsOfCode from "../../Assets/Projects/ncr.jpeg";
import CertificateCard from "./CertificateCard";

function Certification() {
  return (
    <Container fluid className="project-section">
        <Particle />
        <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
            <CertificateCard
                imgPath={leaf} // Replace with your image import or path
                isBlog={false}
                title="CompTIA Security Plus"
                // description="A Capture The Flag (CTF) platform designed for cybersecurity training and competitions. Built with Docker, React, and Node.js, it features dynamic challenge deployment, scoreboard, and user management."
                // ghLink="https://github.com/3212harsh/Exploit_Arena" // Replace with actual GitHub link
                demoLink="https://www.credly.com/badges/6150e496-9656-48e5-ab7d-31144ebd79f0" // Replace with actual demo link if available
            />
            </Col>
            <Col md={4} className="project-card">
            <CertificateCard
                imgPath={suicide} // Replace with your image import or path
                isBlog={false}
                title="Quick Heal Certified Digital Forensic Investigator"
                // description="A Capture The Flag (CTF) platform designed for cybersecurity training and competitions. Built with Docker, React, and Node.js, it features dynamic challenge deployment, scoreboard, and user management."
                // ghLink="https://github.com/3212harsh/Exploit_Arena" // Replace with actual GitHub link
                demoLink="https://lms.quickhealacademy.com/certificates/verification/exam?id=LPU-0000-321307" // Replace with actual demo link if available
            />
            </Col>
            <Col md={4} className="project-card">
            <CertificateCard
                imgPath={emotion} // Replace with your image import or path
                isBlog={false}
                title="Microsoft SC900"
                // description="A Capture The Flag (CTF) platform designed for cybersecurity training and competitions. Built with Docker, React, and Node.js, it features dynamic challenge deployment, scoreboard, and user management."
                // ghLink="https://github.com/3212harsh/Exploit_Arena" // Replace with actual GitHub link
                demoLink="https://www.credly.com/badges/7432ad91-19b7-4f29-b947-29cbda7046cd" // Replace with actual demo link if available
            />
            </Col>
        </Row>
        </Container>
    </Container>
    );
    }

    export default Certification;
            