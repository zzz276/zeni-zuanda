import Card from 'react-bootstrap/Card';

function Cards({ project }) {
  return (
    <Card className='cs-card'>
      <Card.Header>
        <Card.Title>{project.title}</Card.Title>
        <Card.Subtitle>{project.language}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <span className='cs-pill'>
          <span role='img' aria-hidden='true'>⚙️</span>
          build-status: ready
        </span>
      </Card.Body>
      <Card.Footer>
        <Card.Link href={project.link} target='_blank' rel='noreferrer'>
          View repository
        </Card.Link>
      </Card.Footer>
    </Card>
  );
}

export default Cards;
