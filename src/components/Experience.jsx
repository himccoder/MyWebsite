import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import BusinessIcon from '@mui/icons-material/Business';
import Typography from '@mui/material/Typography';
import SoftwareDevLogo from '../assets/img/SoftwareDevLogo1.jpeg';
import ManningLogo from '../assets/img/manning_cics_logo.jpeg';
import Button from 'react-bootstrap/Button';
import URVPoster from '../assets/URV_poster.pdf';
import CDSLogo from '../assets/img/CDS_logo.jpeg';

export const Experience = () => {
  const urvPosterUrl = URVPoster;
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Experience</h2>
            <div className="timeline-container">
              <Timeline position="alternate">
                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ 
                        m: 'auto 0',
                        fontWeight: 600,
                        fontSize: '14px'
                      }}
                      align="right"
                      variant="body2"
                    >
                      Sep 2025 - Present
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot 
                        sx={{ 
                          bgcolor: 'rgba(0, 123, 255, 0.8)',
                          border: '3px solid rgba(20, 35, 85, 1.0)',
                          backdropFilter: 'blur(10px)',
                          width: '50px',
                          height: '50px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <img 
                          src={ManningLogo} 
                          alt="CICS UMass Amherst" 
                          style={{ 
                            width: '30px', 
                            height: '30px', 
                            borderRadius: '4px',
                            objectFit: 'cover'
                          }} 
                        />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <div className="experience-card">
                        <Typography variant="h6" component="div" className="experience-title">
                          Undergraduate Course Assistant
                        </Typography>
                        <Typography variant="subtitle1" className="experience-company">
                          CICS UMass Amherst
                        </Typography>
                        <Typography variant="body2" className="experience-details">
                        Massachusetts, United States · On-site · Part-time
                        </Typography>
                        <Typography variant="body2" className="experience-description">
                          Working closely with the professor to manage CS 360 "Computer Network and Security", grade assignments and exams, and hold office hours to support student learning.
                        </Typography>
                      </div>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ 
                        m: 'auto 0',
                        fontWeight: 600,
                        fontSize: '14px'
                      }}
                      variant="body2"
                    >
                      Feb 2025 - Present
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot 
                        sx={{ 
                          bgcolor: 'rgba(0, 191, 255, 0.8)',
                          border: '3px solid rgba(20, 35, 85, 1.0)',
                          backdropFilter: 'blur(10px)',
                          width: '50px',
                          height: '50px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <img 
                          src={CDSLogo} 
                          alt="CDS & AI Center" 
                          style={{ 
                            width: '30px', 
                            height: '30px', 
                            borderRadius: '4px',
                            objectFit: 'cover'
                          }} 
                        />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <div className="experience-card">
                        <Typography variant="h6" component="div" className="experience-title">
                          Undergraduate Researcher
                        </Typography>
                        <Typography variant="subtitle1" className="experience-company">
                          UMass Cybersecurity Institute - Crypto Lab (CDS & AI Center)
                        </Typography>
                        <Typography variant="body2" className="experience-details">
                          Massachusetts, United States · Remote · Part-time
                        </Typography>
                        <Typography variant="body2" className="experience-description">
                          Conducting research on the novel Scale-and-Perturb (S&P) DCPE (Distance Comparison Preserving Encryption) scheme, evaluating its performance and effectiveness in machine learning applications, and assessing potential vulnerabilities through targeted attacks.
                        </Typography>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ 
                        m: 'auto 0',
                        fontWeight: 600,
                        fontSize: '14px'
                      }}
                      align="right"
                      variant="body2"
                    >
                      May 2025 - August 2025
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot 
                        sx={{ 
                          bgcolor: 'rgba(0, 123, 255, 0.8)',
                          border: '3px solid rgba(20, 35, 85, 1.0)',
                          backdropFilter: 'blur(10px)',
                          width: '50px',
                          height: '50px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <img 
                          src={SoftwareDevLogo} 
                          alt="Software Development" 
                          style={{ 
                            width: '30px', 
                            height: '30px', 
                            borderRadius: '4px',
                            objectFit: 'cover'
                          }} 
                        />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <div className="experience-card">
                        <Typography variant="h6" component="div" className="experience-title">
                          Software Development Intern
                        </Typography>
                        <Typography variant="subtitle1" className="experience-company">
                          Resource Bounded Reasoning Lab
                        </Typography>
                        <Typography variant="body2" className="experience-details">
                          University of Massachusetts Amherst · Full-time · On-site
                        </Typography>
                        <Typography variant="body2" className="experience-description">
                          Resource Bounded Reasoning Lab develops privacy-preserving algorithms for multi-agent AI systems that can effectively coordinate while operating under strict computational and information constraints.
                        </Typography>
                      </div>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ 
                        m: 'auto 0',
                        fontWeight: 600,
                        fontSize: '14px'
                      }}
                      variant="body2"
                    >
                      May 2025 - August 2025
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot 
                        sx={{ 
                          bgcolor: 'rgba(0, 191, 255, 0.8)',
                          border: '3px solid rgba(20, 35, 85, 1.0)',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        <BusinessIcon sx={{ color: '#fff' }} />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <div className="experience-card">
                        <Typography variant="h6" component="div" className="experience-title">
                          Summer Conference Housing Crew
                        </Typography>
                        <Typography variant="subtitle1" className="experience-company">
                          UMass Summer Conference Housing
                        </Typography>
                        <Typography variant="body2" className="experience-details">
                          University of Massachusetts Amherst · Part-time · On-site
                        </Typography>
                        <Typography variant="body2" className="experience-description">
                          Facilitated exceptional guest experiences for 5,000+ conference attendees at UMass Amherst, providing campus orientations, resolving inquiries, and maintaining high service standards.
                        </Typography>
                      </div>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ 
                        m: 'auto 0',
                        fontWeight: 600,
                        fontSize: '14px'
                      }}
                      align="right"
                      variant="body2"
                    >
                      Jun 2025 - August 2025
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot 
                        sx={{ 
                          bgcolor: 'rgba(30, 144, 255, 0.8)',
                          border: '3px solid rgba(20, 35, 85, 1.0)',
                          backdropFilter: 'blur(10px)',
                          width: '50px',
                          height: '50px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <img 
                          src={ManningLogo} 
                          alt="Manning CICS" 
                          style={{ 
                            width: '30px', 
                            height: '30px', 
                            borderRadius: '4px',
                            objectFit: 'cover'
                          }} 
                        />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <div className="experience-card">
                        <Typography variant="h6" component="div" className="experience-title">
                          Undergraduate Research Volunteer
                        </Typography>
                        <Typography variant="subtitle1" className="experience-company">
                          Manning College of Information and Computer Sciences
                        </Typography>
                        <Typography variant="body2" className="experience-details">
                          UMass Amherst · Part-time · Remote
                        </Typography>
                        <Typography variant="body2" className="experience-description">
                          Researching carbon-aware CDN architectures at UMass Amherst to optimize content delivery based on real-time carbon intensity metrics for more sustainable internet infrastructure.
                        </Typography>
                        <div className="project-card-buttons" style={{ marginTop: '12px' }}>
                          <Button
                            variant="secondary"
                            href={urvPosterUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Poster
                          </Button>
                          <Button
                            variant="primary"
                            href="https://github.com/himccoder/GreenBalance"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ms-2"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 