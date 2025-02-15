import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import background from "../assets/img/banner2Portfolio.jpg";
import tbdproj from "../assets/img/TBD.jpg"


export const Projects = () => {

  const projects = [
    {
      title: "Ticket Trading site",
      description: "Mirrors stock market trading of transferrable tickets for events",
      imgUrl: tbdproj,
    },
    {
      title: "Portfolio Site",
      description: "As you can see =) ",
      imgUrl: tbdproj,
    },
    {
      title: "Data Storytelling",
      description: "Analyzed Washing State EV adoption using visualizations in matplotlib",
      imgUrl: tbdproj,
    },
    {
      title: "DES Encryption Scheme",
      description: "IMplemented the DES encryption",
      imgUrl: tbdproj,
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
                <p>MY PROJECTS TO BE PUT SOON</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
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
                    <Tab.Pane eventKey="section">
                      <p>TBD</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>TBD</p>
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
