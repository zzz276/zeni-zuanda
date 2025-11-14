import { Col, Container, Row } from 'react-bootstrap';
import Cards from '../components/Cards';
import Project from '../models/Project';

function Projects() {
  const projects = [
    new Project('BinusLite', 'Flutter · Firebase', 'https://github.com/zzz276/BinusLite'),
    new Project('Defense of The Willi', 'Java · Game Dev', 'https://1drv.ms/u/c/e5956a9184ccc1cb/EVI0M6-r9ghHhv9akhaHWFIBOeV0bOzjqMj-m9la5DFg5w?e=IOrqsd'),
    new Project('DoJo Movie', 'Kotlin · MVVM', 'https://1drv.ms/u/c/e5956a9184ccc1cb/EeU_7TlhEPtBh0fJXuBrkv4BAcnqqt0mfyTv3qUpgAjI1A?e=kAOTKT'),
    new Project('What Generator', 'Kotlin · Compose', 'https://1drv.ms/u/c/e5956a9184ccc1cb/EWq0pqMtdStKtflvrhYStXIBAgLzNoPHovF3G_f_O7CtKQ?e=Eu6G59'),
    new Project('GPS-Tracker', 'Arduino · IoT', 'https://github.com/zzz276/GPS-Tracker')
  ];

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
