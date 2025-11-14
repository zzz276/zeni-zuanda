import Container from 'react-bootstrap/Container';
import About from './About';
import Projects from './Projects';

function Content() {
  return (
    <Container fluid className='cs-content'>
      <About />
      <Projects />
    </Container>
  );
}

export default Content;
