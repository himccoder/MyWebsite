import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-glass-container">
          <Row className="align-items-center">
            <MailchimpForm />
            <Col size={12} sm={6}>
              <span className="brand-hc">HC</span>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/himnish-chhabra-3534a22b3/"><img src={navIcon1} alt="" /></a>
                  
                <a href="https://www.instagram.com/himnishc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src={navIcon3} alt="" /></a>
            
              </div>
              <p>Himnish Chhabra Copyright 2025. All Rights Reserved</p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  )
}
