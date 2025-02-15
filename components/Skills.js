import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';  //using react multi carousel 
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"  //Gradient circle at corner of skills section(background)
import ListGroup from 'react-bootstrap/ListGroup';  //list group for skills 
import pythonlogo from "../assets/img/python.png";
import javalogo from "../assets/img/java.svg";
import clogo from "../assets/img/c.png";
import jslogo from "../assets/img/js.png"; 
import tslogo from "../assets/img/ts.png";
import htmllogo from "../assets/img/html2.png";
import csslogo from "../assets/img/css.png";
import reactlogo from "../assets/img/react (1).png";
import nextlogo from "../assets/img/next-js.svg";
import bootstraplogo from "../assets/img/bootstrap.png";
import tailwindlogo from "../assets/img/tailwind.png";
import expresslogo from "../assets/img/express-js-icon.png"; 
import socketlogo from "../assets/img/socket-io.svg";
import MySQLlogo from "../assets/img/sql.png"; 
import mongologo from "../assets/img/mongodb.png";
import firebaselogo from "../assets/img/firebase.png"; 
import pytorchlogo from "../assets/img/pytorch.svg"; 
import scilogo from "../assets/img/scikit-learn.png"; 
import pandaslogo from "../assets/img/Pandas.png"; 
import numpylogo from "../assets/img/NumPy.png"; 
import matplotliblogo from "../assets/img/matplotlib.png"; 
import dockerlogo from "../assets/img/docker.png";
import kuberneteslogo from "../assets/img/kubernetes.svg"; 
import gitlogo from "../assets/img/git.png";
import postmanlogo from "../assets/img/postman.png";
import arduinologo from "../assets/img/arduino.png";
import latexlogo from "../assets/img/latex.png";
import background2 from "../assets/img/banner2Portfolio.jpg";





export const Skills = () => {
  const responsive = {  //This is from Carousel(default)
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3  //No of items to show at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        
                         
                            <h4 className="text-start">Programming Languages </h4>
                            <ListGroup horizontal className="mb-3"> {/*className is bootstraps inbuilt styling attribute options, vertically keep a 3 space fdistance and between itens in same row 2 keep space*/}
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>Python
                                
                              <div><img src = {pythonlogo} className = "skill-logo" alt = "python logo"></img></div>
          
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>Java
                                
                              <div><img src = {javalogo} className = "skill-logo" alt = "java logo"></img></div>
          
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>JavaScript
                                
                              <div><img src = {jslogo} className = "skill-logo" alt = "js logo"></img></div>
          
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>TypeScript
                                
                              <div><img src = {tslogo} className = "skill-logo" alt = "ts logo"></img></div>
          
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>C/C++
                                
                              <div><img src = {clogo} className = "skill-logo" alt = "c logo"></img></div>
          
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>HTML5
                                
                              <div><img src = {htmllogo} className = "skill-logo" alt = "html logo"></img></div>
          
                              </ListGroup.Item></div>
                              
                              
                            </ListGroup>

                            {/* Second row (CSS3 is now here) */}
                            <ListGroup horizontal className="mb-3">
                              <div className="px-2 custom-listgroup-item">
                                <ListGroup.Item>
                                  CSS3
                                  <div><img src={csslogo} className="skill-logo" alt="CSS3 Logo" /></div>
                                </ListGroup.Item>
                              </div>
                            </ListGroup>

                            <h4 className="text-start">Web Development</h4>
                            <ListGroup horizontal className="mb-3"> {/*className is bootstraps inbuilt styling attribute options, vertically keep a 3 space fdistance and between itens in same row 2 keep space*/}
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>React.js
                                
                              <div><img src = {reactlogo} className = "skill-logo" alt = "react logo"></img></div>
          
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>Next.js
                                
                              <div><img src = {nextlogo} className = "skill-logo" alt = "next logo"></img></div>
          
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>Bootstrap 
                                
                              <div><img src = {bootstraplogo} className = "skill-logo" alt = "bootstrap logo"></img></div>
                                          
          
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>Tailwind CSS
                                
                              <div><img src = {tailwindlogo} className = "skill-logo" alt = "tailwind logo"></img></div>
          
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>Express.js
                              <div><img src = {expresslogo} className = "skill-logo" alt = "express logo"></img></div>
                              </ListGroup.Item></div>
                                
                               
          
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>Sockets.io
                              <div><img src = {socketlogo} className = "skill-logo" alt = "sockets logo"></img></div>
                                
                              </ListGroup.Item></div>
                              
                            </ListGroup>
                            <h4 className="text-start">Databases</h4>
                            <ListGroup horizontal className="mb-3"> {/*className is bootstraps inbuilt styling attribute options, vertically keep a 3 space fdistance and between itens in same row 2 keep space*/}
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>MySQL
                                
                              <div><img src = {MySQLlogo} className = "skill-logo" alt = "MySQL logo"></img></div>
          
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>MongoDB
                              <div><img src = {mongologo} className = "skill-logo" alt = "MongoDB logo"></img></div>
                                
          
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>Firebase
                              <div><img src = {firebaselogo} className = "skill-logo" alt = "firebase logo"></img></div>
                                
          
                              </ListGroup.Item></div>
            
                            </ListGroup>
                            <h4 className="text-start">AI/ML</h4>
                            <ListGroup horizontal className="mb-3"> {/*className is bootstraps inbuilt styling attribute options, vertically keep a 3 space fdistance and between itens in same row 2 keep space*/}
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>PyTorch
                              <div><img src = {pytorchlogo} className = "skill-logo" alt = "pytorch logo"></img></div>
                                
          
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>Sci-kit Learn
                                
                              <div><img src = {scilogo} className = "skill-logo" alt = "scikit logo"></img></div>
          
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>Pandas
                                
                              <div><img src = {pandaslogo} className = "skill-logo" alt = "pandas logo"></img></div>
                                
          
                              
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>NumPy
                                
                              <div><img src = {numpylogo} className = "skill-logo" alt = "numpy logo"></img></div>
                                
          
          
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>matplotlib
                                
                              <div><img src = {matplotliblogo} className = "skill-logo" alt = "matplotlib logo"></img></div>
                              
                              </ListGroup.Item></div>
                            </ListGroup>
                            <h4 className="text-start">Platforms & Tools</h4>
                            <ListGroup horizontal className="mb-3"> {/*className is bootstraps inbuilt styling attribute options, vertically keep a 3 space fdistance and between itens in same row 2 keep space*/}
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>Docker
                                
                              <div><img src = {dockerlogo} className = "skill-logo" alt = "docker logo"></img></div>
                              
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>Kubernetes
                                
                              <div><img src = {kuberneteslogo} className = "skill-logo" alt = "kubernetes logo"></img></div>
          
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>Git
                              <div><img src = {gitlogo} className = "skill-logo" alt = "git logo"></img></div>
                                
          
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>Postman
                              <div><img src = {postmanlogo} className = "skill-logo" alt = "postman logo"></img></div>
                                
                  
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>Arduino 
                              <div><img src = {arduinologo} className = "skill-logo" alt = "arduino logo"></img></div>
                              </ListGroup.Item></div>
                              <div className="px-2 custom-listgroup-item"><ListGroup.Item>LaTeX
                                
                              <div><img src = {latexlogo} className = "skill-logo" alt = "latex logo"></img></div>
          
                                
                              </ListGroup.Item></div>
                            </ListGroup>

                          
  
    
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" /> {/**Behind skills section image */}
    </section>
  )
}

