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

export const Experience = () => {
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
                      May 2025 - Present
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
                      May 2025 - Present
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
                          Summer Conference Housing Staff
                        </Typography>
                        <Typography variant="subtitle1" className="experience-company">
                          UMass Summer Conference Housing
                        </Typography>
                        <Typography variant="body2" className="experience-details">
                          University of Massachusetts Amherst · Part-time · On-site
                        </Typography>
                        <Typography variant="body2" className="experience-description">
                          Facilitated exceptional guest experiences for 3,000+ conference attendees at UMass Amherst, providing campus orientations, resolving inquiries, and maintaining high service standards.
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
                      Jun 2025 - Present
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