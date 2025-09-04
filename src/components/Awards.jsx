import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

export const Awards = () => {
    return (
    <section className="Awards" id="awards">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="award-bx wow zoomIn">
                <h2>Awards & Achievements</h2>
                    <ListGroup as="ol" numbered>
                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">UMass Chancellor's Scholarship Award</div>Recipient of UMass Amherst’s highest merit-based scholarship, awarded for academic excellence over the course of enrollment.</div>
                            <Badge bg="primary" pill>
                            2022
                            </Badge>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">Dean's List</div>
                            Named to the Dean's List in 5 out of 6 semesters at UMass Amherst for exceptional academic performance.
                            </div>
                            <Badge bg="primary" pill>
                            2025
                            </Badge>
                        </ListGroup.Item>
                        
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">Achieved a Top 1% ranking in the Mathematics IGCSE exam.</div>
                            Achieved a score of 189/200 in Mathematics A IGCSE exam. Earning a spot in the top 1% globally.
                            </div>
                            <Badge bg="primary" pill>
                            2020
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
     


