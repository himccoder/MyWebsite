import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import background from "../assets/img/banner2Portfolio.jpg";
import tbdproj from "../assets/img/TBD.jpg";
import pdf from "../assets/CS320_429__Team_M_-_Project_Documentation.pdf";
import ttproj from "../assets/img/TicketTradingimg.png";
import portfolio from "../assets/img/PortfolioThumbnailJune.png";
import DataStory from "../assets/img/DataStroytellingimg.png";
import tictactoe from "../assets/img/electictactoeimg.jpg";
import StadiumManagement from "../assets/img/StadiumManagementimg.png";
import NeuralComplete from "../assets/img/NeuralComplete.png";


export const Projects = () => {

  const projects = [
    {
      title: "Ticket Trading site",
      description: "Mirrors stock market trading of transferrable tickets for events",
      imgUrl: ttproj,
      repo: "https://github.com/marco-dm1/CS320-Team-M",
      deliverable: pdf
    },
    {
      title: "Portfolio Site",
      description: "As you can see =) ",
      imgUrl: portfolio,
      repo: "https://github.com/himccoder/MyWebsite"
    },
    {
      title: "Neural Complete",
      description: "RNN text generator using PyTorch and custom embeddings.",
      imgUrl: NeuralComplete,
      repo: "https://github.com/himccoder/Neural-Complete.git"
    },
    {
      title: "Data Storytelling",
      description: "Analyzed Washing State EV adoption using visualizations in matplotlib",
      imgUrl: DataStory,
      repo: "https://github.com/himccoder/DataAnalysis"
    },
    {
      title: "elec-TIC-TAC-TOE",
      description: "Created a tictactoe game using Arduino with LED,LCD,BUZZER etc.",
      imgUrl: tictactoe,
      repo: "https://github.com/himccoder/elec-TIC-TAC-TOE"
    },
    {
      title: "Stadium Management",
      description: "Using Python and CSV files to manage a database for a stadium",
      imgUrl: StadiumManagement,
      repo: "https://github.com/himccoder/Stadium-Management/tree/main"
    },
    
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>MORE PROJECTS COMING SOON</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={background}></img>
    </section>
  )
}
