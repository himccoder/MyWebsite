import { useState, useEffect } from "react";  //Need for typing and deleting animatiuon
import { Container, Row, Col } from "react-bootstrap";
//import headerImg from "../assets/img/header-img.svg";  //Astronaut image
import headerImg from "../assets/img/Himnish_pic.jpg"; //My picture
import UmassLogo from "../assets/img/University_of_Massachusetts_Amherst_seal.png";
import MSBKlogo from "../assets/img/MSBKseal.jpg";
//import { ArrowRightCircle } from 'react-bootstrap-icons'; //arrow for let's conenct button
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);  //Which word is currently displayed on screen
  const [isDeleting, setIsDeleting] = useState(false); //Is word being typed out or deleted, initially false becasue we start by typing the word
  const [text, setText] = useState(''); //Indicate portion of word being displayed
  const [delta, setDelta] = useState(300 - Math.random() * 100); //How fast one letter comes after one letter is typed 
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "AI/ML", "Fintech","Security" ];
  const period = 2000; //arbitrarily indicate how long it takes for an extra letter to be typed out
{/**
  useEffect(() => {
     /** run this function to be responsible for typing and deleting the letters
    let ticker = setInterval(() => {  
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])  
/**Want this to run every time text gets updated 
 **/}
{/**
  const tick = () => {
    let i = loopNum % toRotate.length; //Loop number would keep increasing so to bring it back we MOD
    let fullText = toRotate[i]; //ith elementt- AI/ML for e.g.
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1); //if deleting then take out last letter, if not deleting then add new letter to get closer to full text

    setText(updatedText);  //update state to updated text

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true); //If we got to the point where we reached end of word, then set is deleting to true
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
 **/}

  return (
    <section className="banner" id="home">
      <Container>  {/*Taking container from bootstrap*/}
        <div className="banner-glass-container">
          <Row className="align-items-center">  {/*bootstrap takes care of styling. The <Col> component is used to define a column inside a grid system, which is responsive and automatically adjusts its layout based on the viewport size (like on small, medium, or large screens).*/}
            <Col xs={12} md={6} xl={7}> {/**xs={12} md={6} xl={7} */}
              <TrackVisibility>
                {({ isVisible }) =>
                <div>
                  <h1>{`Hi! I'm Himnish Chhabra`} </h1>
                  <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "AI/ML","Fintech", "Security" ]'><span className="wrap">{text}</span></span></h1>
                    <p>University of Massachusetts, Amherst  |  Major in Computer Science  |  Minor in Mathematics</p>
                    <div style={styles.container}>
                      <img src={UmassLogo} alt="UMass Amherst Seal" style={styles.logo} />
                      <img src={MSBKlogo} alt="MSBK Seal" style={styles.logo} />
                    </div>{/**ArrowRightCircle react bootstrap icon - arrow icon ---Need to replace console.log with a google form or something, some functionality */}
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={9} md={3} xl={4}>  {/**Anmated image */}
              <TrackVisibility>
                {({ isVisible }) =>
                  <div >
                    
                    <img src={headerImg} alt="Header Img" />
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}




const styles = {
  container: {
    display: "flex",
    alignItems: "center", // Aligns images vertically
    gap: "20px", // Adds spacing between logos
    marginTop: "30px", // Move logos lower
  },
  logo: {
    width: "130px", // Made bigger for better visibility
    height: "auto",
  },
};
