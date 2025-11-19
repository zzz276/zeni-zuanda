import { Col, Container, Row } from 'react-bootstrap';
import Cards from '../components/Cards';

function Projects({projects}) {
  return (
    <section className='cs-panel'>
      <h1>Projects</h1>
      <p className='cs-bio'>
        A snapshot of experiments spanning mobile, embedded systems, and experimental gameplay.
        Each card links to source files or demo builds so you can dive deeper.
      </p>
      <Container fluid className='cs-project-grid'>
        <Row xs={1} md={2} lg={3} className='g-4'>
          {projects.map((project) => (
            <Col key={project.title}>
              <Cards project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
