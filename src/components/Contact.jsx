import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [toast, setToast] = useState({ show: false, type: '', message: '' });

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }
   {/**only updates category that just updated in the form  */}

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setToast({ show: false, type: '', message: '' });
    
    try {
      // Set timeout for 10 seconds
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), 10000)
      );
      
      const fetchPromise = fetch("http://localhost:5000/contact", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      
      let response = await Promise.race([fetchPromise, timeoutPromise]);
      let result = await response.json();
      
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      
      if (result.code === 200) {
        showToast('success', 'Message sent successfully! I\'ll get back to you soon.');
      } else {
        throw new Error('Server error');
      }
    } catch (error) {
      setButtonText("Send");
      
      if (error.message === 'timeout') {
        showToast('warning', 'The message is taking longer than usual to send. You can also reach me directly at: himnishchhabra@gmail.com');
      } else {
        showToast('error', 'Something went wrong. Please try again or contact me directly at: himnishchhabra@gmail.com');
      }
    }
  };

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    // Remove auto-dismiss - toast stays until user closes it
  };

  return (
    <section className="contact" id="connect"> {/**id to navigate between sections  */}
      <Container>
        <div className="contact-glass-container">
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className="envelope-container">
                    <svg 
                      className="envelope-icon" 
                      width="400" 
                      height="300" 
                      viewBox="0 0 400 300" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Envelope background */}
                      <rect 
                        x="50" 
                        y="75" 
                        width="300" 
                        height="200" 
                        rx="10" 
                        fill="rgba(255, 255, 255, 0.1)" 
                        stroke="rgba(0, 123, 255, 0.6)" 
                        strokeWidth="2"
                      />
                      
                      {/* Envelope flap */}
                      <path 
                        d="M50 75 L200 175 L350 75" 
                        fill="none" 
                        stroke="rgba(0, 123, 255, 0.8)" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      
                      {/* Letter inside */}
                      <rect 
                        x="80" 
                        y="120" 
                        width="240" 
                        height="120" 
                        rx="5" 
                        fill="rgba(255, 255, 255, 0.2)" 
                        stroke="rgba(0, 191, 255, 0.4)" 
                        strokeWidth="1"
                      />
                      
                      {/* Letter lines */}
                      <line x1="100" y1="140" x2="280" y2="140" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="2"/>
                      <line x1="100" y1="160" x2="250" y2="160" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="2"/>
                      <line x1="100" y1="180" x2="300" y2="180" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="2"/>
                      <line x1="100" y1="200" x2="220" y2="200" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="2"/>
                    </svg>
                  </div>
                }
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>  {/**put inside span since it's a variable that changes from send to sending */}
                      </Col>
                    </Row>
                  </form>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </div>
      </Container>
      
      {/* Toast Notification */}
      {toast.show && (
        <div className="toast-notification">
          <div className="toast-content">
            <div className="toast-message">{toast.message}</div>
            <button 
              className="toast-close" 
              onClick={() => setToast({ show: false, type: '', message: '' })}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
