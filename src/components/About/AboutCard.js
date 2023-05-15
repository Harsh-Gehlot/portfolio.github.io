import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harsh Gehlot </span>
            from <span className="purple"> Indore, India.</span>
            <br />I am an undergraduate pursuing B.E. in Computer Science in IET DAVV.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Horror movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do what you love"{" "}
            {/* Strive to build things that make a difference */}
          </p>
          {/* <footer className="blockquote-footer">Harsh</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
