import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

export const Extracurriculars = () => {
    return (
    <section className="extracurriculars" id="extracurriculars">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="award-bx">
                    <h2>Extracurriculars</h2>
                    <ListGroup as="ol" numbered>
                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">Manning Undergraduate Student Impact Council (MUSIC)</div>
                            Collaborated with peers and faculty to drive initiatives enhancing the student experience and fostering a culture of innovation in the College of Computer Science.
                            </div>
                            <Badge bg="primary" pill>
                            Aug 2025 - Present
                            </Badge>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">CICS Mentorship</div>
                            Mentor to CICS first-year students as they navigate courses, extracurriculars, and college life.
                            </div>
                            <Badge bg="primary" pill>
                            Sep 2025 - Present
                            </Badge>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">President and Founder of UMass Competitive Programming Club</div>
                            Club hosts contests, interview prep, projects and more for student community
                            </div>
                            <Badge bg="primary" pill>
                            2024 - Present
                            </Badge>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>
    </div>
    </section>
    );
}


