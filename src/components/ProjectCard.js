import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const ProjectCard = ({title,description, imgUrl,repo,deliverables})=>{
return (
  <Col size={12} sm={6} md={4}>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={imgUrl} style={{ height: "225px", objectFit: "cover" }}  />
      <Card.Body >
        <Card.Title>{title}</Card.Title>
        <Card.Text >
          {description}
        </Card.Text>
        <Button variant="primary" href={repo} target="_blank" rel="noopener noreferrer">Github</Button>
        {deliverables && (
            <Button
              variant="secondary"
              href={deliverables}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "10px" }}
            >
              View Deliverables
            </Button>
          )}

      </Card.Body>
    </Card>
    </Col>

  


  
)

}
