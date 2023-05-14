import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Hackathon Portal"
              description="orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at pulvinar leo. Quisque viverra elit lorem, ex luctus eu. Suspendisse viverra sapien risus, elementum euismod sem posuere id."
              ghLink="#"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="To-Do List"
              description=" A todo list Web Application developed by using django in backend 
                and HTML, CSS, JavaScrpit in frontend. It have basic CRUD with search functionality."
              ghLink="https://github.com/Harsh-Gehlot/Todo-List"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Space Labyrithn"
              description="A thrilling 2D space shooter game developed in Unity using C#. Game assests were created in Inkscape."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://hydrargyrum-hg.itch.io/spacelabyrinth"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Stock Price Predictor"
              description=" Used data from yahoo finance to train a stock price predictor model using tensorflow framework using LSTM. The model performed well with a accuracy of 74%."
              // Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model
              ghLink="https://github.com/Harsh-Gehlot/StockPricePredictionWithLSTM"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Image Classification"
              description="Traind a CNN model using keras to classify man and woman images. Dataset from kaggle was used to train the model. I was able to achieve accuracy of 94%"
              ghLink="https://github.com/Harsh-Gehlot/BInary_Image_Classsification"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Virtual Canvas"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at pulvinar leo. Quisque viverra elit lorem, ac tincidunt ex luctus eu. Suspendisse viverra sapien risus."
              ghLink="https://github.com/Harsh-Gehlot/Virtual-Canvas"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
