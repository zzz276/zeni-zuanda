import { Col, Container, Row } from 'react-bootstrap';
import Cards from '../components/Cards';
import Project from '../models/Project';

function Projects() {
  let projects = [
    new Project("BinusLite", "Flutter", "https://github.com/zzz276/BinusLite"),
    new Project("Defense of The Willi", "Java", "https://1drv.ms/u/c/e5956a9184ccc1cb/EVI0M6-r9ghHhv9akhaHWFIBOeV0bOzjqMj-m9la5DFg5w?e=IOrqsd"),
    new Project("DoJo Movie", "Kotlin", "https://1drv.ms/u/c/e5956a9184ccc1cb/EeU_7TlhEPtBh0fJXuBrkv4BAcnqqt0mfyTv3qUpgAjI1A?e=kAOTKT"),
    new Project("What Generator", "Kotlin", "https://1drv.ms/u/c/e5956a9184ccc1cb/EWq0pqMtdStKtflvrhYStXIBAgLzNoPHovF3G_f_O7CtKQ?e=Eu6G59"),
    new Project("GPS-Tracker", "Arduino", "https://github.com/zzz276/GPS-Tracker"),
  ];

  return (
    <section>
      <h1 style={{ paddingBottom: '2.5%' }}>Projects</h1>
      <Container>
        <Row>
          <Col>
            <Cards project={ projects[0] }/>
          </Col>
          <Col>
            <Cards project={ projects[1] }/>
          </Col>
          <Col>
            <Cards project={ projects[2] }/>
          </Col>
          <Col>
            <Cards project={ projects[3] }/>
          </Col>
          <Col>
            <Cards project={ projects[4] }/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects
