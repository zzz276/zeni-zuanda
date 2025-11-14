import { Container, Nav, Navbar } from 'react-bootstrap';

function Footer({ name }) {
  return (
    <footer className='cs-footer text-white'>
      <Navbar data-bs-theme='dark' variant='dark'>
        <Container fluid className='justify-content-between align-items-center'>
          <small className='cs-tagline'>
            Crafted in React • Inspired by circuits & constellations
          </small>
          <Nav className='cs-links'>
            <Nav.Item>
              <Nav.Link href='https://github.com/zzz276' target='_blank' rel='noreferrer'>
                Github
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='https://www.linkedin.com/in/zeni-zuanda-09558a386/' target='_blank' rel='noreferrer'>
                LinkedIn
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Container className='py-2 text-center cs-tagline'>
        © {new Date().getFullYear()} {name} · Computer Science Enthusiast
      </Container>
    </footer>
  );
}

export default Footer;
