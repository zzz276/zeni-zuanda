import Card from 'react-bootstrap/Card';

function Cards({ project }) {
  return (
    <Card className='justify-content-center' style={{ height: '100%', padding: '10px 0px' }}>
      <Card.Body>
        <Card.Title >{ project.title }</Card.Title>
        <Card.Subtitle>{ project.language }</Card.Subtitle>
      </Card.Body>
      <Card.Footer>
        <Card.Link href={ project.link }>Link</Card.Link>
      </Card.Footer>
    </Card>
  );
}

export default Cards;
