import Container from 'react-bootstrap/Container';
import About from './About';
import Projects from './Projects';

function Content() {
  return (
    <Container fluid style={{ padding: '10%' }}>
      <About />
      <Projects />
    </Container>
  );
}

export default Content;
