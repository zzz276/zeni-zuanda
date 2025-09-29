import Card from 'react-bootstrap/Card';

function Cards({ project }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title >{ project.title }</Card.Title>
        <Card.Subtitle>{ project.language }</Card.Subtitle>
        <Card.Link href={ project.link }>Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;
